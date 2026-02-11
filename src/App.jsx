import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import WeekView from './components/WeekView';
import { protocol } from './data/protocol';

function App() {
  const [currentWeekId, setCurrentWeekId] = useState(protocol[0].id);
  const [currentDay, setCurrentDay] = useState(1);
  const [completedExercises, setCompletedExercises] = useState(() => {
    const saved = localStorage.getItem('pt_protocol_progress_v2');
    if (!saved) return {};
    try {
      return JSON.parse(saved);
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('pt_protocol_progress_v2', JSON.stringify(completedExercises));
  }, [completedExercises]);

  const handleToggleExercise = (exerciseId) => {
    const key = `${currentWeekId}-d${currentDay}-${exerciseId}`;
    setCompletedExercises((prev) => {
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
      } else {
        next[key] = true;
      }
      return next;
    });
  };

  const currentWeekData = protocol.find(p => p.id === currentWeekId);

  const parseProgressKey = (key) => {
    const dayMarkerIndex = key.indexOf('-d');
    if (dayMarkerIndex === -1) return null;
    const afterDayMarker = key.slice(dayMarkerIndex + 2);
    const dashAfterDay = afterDayMarker.indexOf('-');
    if (dashAfterDay === -1) return null;

    const weekId = key.slice(0, dayMarkerIndex);
    const day = Number(afterDayMarker.slice(0, dashAfterDay));
    const exerciseId = afterDayMarker.slice(dashAfterDay + 1);
    if (!Number.isFinite(day)) return null;

    return { weekId, day, exerciseId };
  };

  const completedEntries = Object.entries(completedExercises).filter(([, done]) => Boolean(done));

  // Coverage metric: % of week exercises completed at least once.
  const weekCompletedExerciseIds = new Set();
  for (const [key] of completedEntries) {
    const parsed = parseProgressKey(key);
    if (parsed && parsed.weekId === currentWeekId) {
      weekCompletedExerciseIds.add(parsed.exerciseId);
    }
  }
  const weekTotalPotential = currentWeekData ? currentWeekData.exercises.length : 0;
  const weekCompletedTotal = weekCompletedExerciseIds.size;

  const weekProgressPercent = weekTotalPotential > 0 ? Math.round((weekCompletedTotal / weekTotalPotential) * 100) : 0;

  // Overall coverage: % of all exercises completed at least once.
  const completedProtocolExerciseIds = new Set();
  for (const [key] of completedEntries) {
    const parsed = parseProgressKey(key);
    if (parsed) {
      completedProtocolExerciseIds.add(`${parsed.weekId}::${parsed.exerciseId}`);
    }
  }
  const totalProtocolPotential = protocol.reduce((sum, week) => sum + week.exercises.length, 0);
  const totalProtocolCompleted = completedProtocolExerciseIds.size;
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
            <div className="stat-label">Program Coverage</div>
            <div className="stat-value">{overallProgress}%</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${overallProgress}%` }} />
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Week Coverage</div>
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
