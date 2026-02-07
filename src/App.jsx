import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import WeekView from './components/WeekView';
import { protocol } from './data/protocol';

function App() {
  const [currentWeekId, setCurrentWeekId] = useState(protocol[0].id);
  const [currentDay, setCurrentDay] = useState(1);
  const [completedExercises, setCompletedExercises] = useState(() => {
    const saved = localStorage.getItem('pt_protocol_progress_v2');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('pt_protocol_progress_v2', JSON.stringify(completedExercises));
  }, [completedExercises]);

  const handleToggleExercise = (exerciseId) => {
    const key = `${currentWeekId}-d${currentDay}-${exerciseId}`;
    setCompletedExercises(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentWeekData = protocol.find(p => p.id === currentWeekId);

  // Calculate current week stats (average of all days or specific to current day)
  // Let's track total potential exercises for the week: (exercises * 7 days)
  const weekTotalPotential = currentWeekData ? currentWeekData.exercises.length * 7 : 0;

  // Count all completed for this week across all days
  const weekCompletedTotal = currentWeekData ? Object.keys(completedExercises).filter(key => {
    return key.startsWith(`${currentWeekId}-`);
  }).length : 0;

  const weekProgressPercent = weekTotalPotential > 0 ? Math.round((weekCompletedTotal / weekTotalPotential) * 100) : 0;

  // Calculate overall progress across whole protocol
  const totalProtocolPotential = protocol.reduce((sum, week) => sum + (week.exercises.length * 7), 0);
  const totalProtocolCompleted = Object.keys(completedExercises).length;
  const overallProgress = totalProtocolPotential > 0 ? Math.round((totalProtocolCompleted / totalProtocolPotential) * 100) : 0;

  // Day stats
  const dayStats = currentWeekData ? (() => {
    const total = currentWeekData.exercises.length;
    const completed = currentWeekData.exercises.filter(ex =>
      completedExercises[`${currentWeekId}-d${currentDay}-${ex.id}`]
    ).length;
    return { total, completed };
  })() : { total: 0, completed: 0 };


  return (
    <div className="app-shell">
      <Sidebar
        weeks={protocol}
        currentWeekId={currentWeekId}
        currentDay={currentDay}
        onSelectWeek={(id) => setCurrentWeekId(id)}
        onSelectDay={setCurrentDay}
      />

      <main className="main-content">
        <div className="top-stats">
          <div className="stat-card">
            <div className="stat-label">Total Progress</div>
            <div className="stat-value">{overallProgress}%</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${overallProgress}%` }} />
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Week Progress</div>
            <div className="stat-value">{weekProgressPercent}%</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${weekProgressPercent}%` }} />
            </div>
          </div>

          <div className="stat-card highlight">
            <div className="stat-label">Day {currentDay}</div>
            <div className="stat-value">{dayStats.completed}/{dayStats.total}</div>
            <div className="stat-subtext">exercises done</div>
          </div>
        </div>

        <WeekView
          weekData={currentWeekData}
          currentDay={currentDay}
          onSelectDay={setCurrentDay}
          completedExercises={completedExercises}
          onToggleExercise={handleToggleExercise}
          currentWeekId={currentWeekId}
        />
      </main>

      <style>{`
        .app-shell {
          display: flex;
          min-height: 100vh;
          background: var(--bg-app);
          gap: 1rem; /* Gap for floating layout */
        }

        .main-content {
          flex: 1;
          padding: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .top-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .stat-card.highlight {
          border-color: var(--primary-blue-light);
          background: linear-gradient(to bottom right, var(--bg-primary), #E1F5FE);
        }

        .stat-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          line-height: 1;
        }
        
        .highlight .stat-value {
          color: var(--primary-blue);
        }

        .stat-subtext {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .progress-bar {
          height: 4px;
          background: var(--bg-secondary);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 0.75rem;
        }

        .progress-fill {
          height: 100%;
          background: var(--primary-blue);
          border-radius: 2px;
          transition: var(--transition-smooth);
        }

        @media (max-width: 768px) {
          .app-shell {
            flex-direction: column;
          }
          
          .main-content {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
