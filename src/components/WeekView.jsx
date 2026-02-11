import ExerciseItem from './ExerciseItem';

export default function WeekView({
  weekData,
  completedExercises,
  onToggleExercise,
  currentDay,
  currentWeekId
}) {
  if (!weekData) return null;

  // Filter exercises relevant to the current day if specific schedule exists
  // For now, we assume same exercises every day unless specified otherwise
  const dayExercises = weekData.exercises;

  const completedCount = dayExercises.filter(ex =>
    completedExercises[`${currentWeekId}-d${currentDay}-${ex.id}`]
  ).length;

  return (
    <div className="week-view">
      <div className="playlist-header">
        <div className="playlist-art-placeholder">
          {weekData.cover ? (
            <img src={weekData.cover} alt={weekData.title} className="playlist-cover" />
          ) : (
            <span>Week {weekData.id.replace('week-', '')}</span>
          )}
        </div>
        <div className="playlist-info">
          <span className="playlist-label">Rehab Phase</span>
          <h1 className="playlist-title">{weekData.title}</h1>
          <p className="playlist-description">{weekData.description}</p>
          <div className="playlist-meta">
            <span>{weekData.exercises.length} Exercises</span>
            <span className="separator">•</span>
            <span>{weekData.goal}</span>
          </div>
        </div>
      </div>

      <div className="playlist-controls">
        <div className="progress-badge">
          {completedCount} / {dayExercises.length} Completed
        </div>
      </div>

      {/* Educational Section as "Artist Pick" or similar info block */}
      {weekData.educational && weekData.educational.length > 0 && (
        <div className="info-block">
          <h3>💡 Key Points</h3>
          <ul>
            {weekData.educational.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {weekData.modalities && weekData.modalities.length > 0 && (
        <div className="info-block modalities-block">
          <h3>Recovery Modalities</h3>
          <ul>
            {weekData.modalities.map((item) => (
              <li key={item.id}>
                <strong>{item.name}:</strong> {item.description}
                {item.setting ? ` (${item.setting})` : ''}
                {item.duration ? ` - ${item.duration}` : ''}
                {item.frequency ? ` - ${item.frequency}` : ''}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="safety-block" role="note" aria-label="Important medical warning signs">
        <h3>Urgent Warning Signs</h3>
        <p>
          Stop the session and seek urgent care if you develop new bowel/bladder problems, numbness around the
          groin/saddle area, severe progressive leg weakness, or rapidly worsening pain with neurological changes.
        </p>
      </div>

      <div className="tracks-list-container">
        <div className="tracks-header-row">
          <span className="col-status">#</span>
          <span className="col-title">Title</span>
          <span className="col-meta">Details</span>
          <span className="col-action"></span>
        </div>
        <div className="tracks-list">
          {dayExercises.map((exercise, index) => (
            <ExerciseItem
              key={exercise.id}
              exercise={exercise}
              isCompleted={!!completedExercises[`${currentWeekId}-d${currentDay}-${exercise.id}`]}
              onToggle={() => onToggleExercise(exercise.id)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .week-view {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-app); /* Matches main bg */
        }

        .playlist-header {
          padding: 2rem 2rem 1.5rem 2rem;
          display: flex;
          align-items: flex-end; /* Bottom align like Spotify */
          gap: 1.5rem;
          background: linear-gradient(to bottom, #dbeafe 0%, var(--bg-app) 100%); /* Subtle blue gradient */
        }

        .playlist-art-placeholder {
          width: 160px;
          height: 160px;
          background: white;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--primary-blue);
          border-radius: 4px; /* Spotify art usually sharp or slightly rounded */
          flex-shrink: 0;
          overflow: hidden; /* Ensure image fits */
        }

        .playlist-cover {
           width: 100%;
           height: 100%;
           object-fit: cover;
           display: block;
        }

        .playlist-info {
           display: flex;
           flex-direction: column;
           gap: 0.25rem;
           margin-bottom: 0.5rem;
        }

        .playlist-label {
           text-transform: uppercase;
           font-size: 0.75rem;
           font-weight: 700;
           letter-spacing: 0.1em;
           color: var(--text-secondary);
        }

        .playlist-title {
           font-size: 3rem; /* Big bold title */
           line-height: 1;
           font-weight: 900;
           letter-spacing: -0.04em;
           margin: 0;
           color: var(--text-primary);
        }

        .playlist-description {
           font-size: 0.95rem;
           color: var(--text-secondary);
           margin: 0.5rem 0;
           max-width: 600px;
           opacity: 0.8;
        }

        .playlist-meta {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           font-size: 0.9rem;
           font-weight: 600;
           color: var(--text-primary);
        }

        .playlist-controls {
           padding: 1rem 2rem;
           display: flex;
           align-items: center;
           gap: 1rem;
        }

        .progress-badge {
           background: var(--primary-blue);
           color: white;
           padding: 0.5rem 1rem;
           border-radius: 20px;
           font-weight: 600;
           font-size: 0.9rem;
           box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
        }

        .info-block {
           margin: 0 2rem 1.5rem 2rem;
           padding: 1.5rem;
           background: var(--bg-primary);
           border-radius: var(--radius-sm);
           box-shadow: var(--shadow-sm);
        }
        
        .info-block h3 { 
           margin: 0 0 0.5rem 0; 
           font-size: 1rem;
        }
        
        .info-block ul {
           margin: 0;
           padding-left: 1.25rem;
           color: var(--text-secondary);
        }

        .modalities-block li {
           margin-bottom: 0.4rem;
        }

        .safety-block {
           margin: 0 2rem 1.5rem 2rem;
           padding: 1rem 1.25rem;
           background: #fff8f1;
           border: 1px solid #f5d0a9;
           border-radius: var(--radius-sm);
           color: #7c2d12;
        }

        .safety-block h3 {
           margin: 0 0 0.4rem 0;
           font-size: 0.95rem;
        }

        .safety-block p {
           margin: 0;
           font-size: 0.9rem;
           line-height: 1.5;
        }

        .tracks-list-container {
           flex: 1;
           background: var(--bg-app); /* Transparent-ish */
           padding: 0 2rem 2rem 2rem;
        }

        .tracks-header-row {
           display: grid;
           grid-template-columns: 40px 1fr auto 40px;
           gap: 1rem;
           padding: 0 1rem 0.5rem 1rem;
           border-bottom: 1px solid var(--border-color);
           margin-bottom: 0.5rem;
           color: var(--text-secondary);
           font-size: 0.85rem;
           text-transform: uppercase;
           letter-spacing: 0.1em;
        }
        
        .col-status { text-align: center; }
        .col-title { }
        .col-meta { text-align: right; }

        @media (max-width: 768px) {
           .playlist-header {
              flex-direction: column;
              align-items: flex-start;
           }
           .playlist-art-placeholder {
              width: 120px;
              height: 120px;
           }
           .playlist-title {
              font-size: 2rem;
           }
           .tracks-header-row {
              display: none; /* Hide header on mobile if simpler */
           }
           .playlist-controls {
              padding: 0.5rem 2rem 1rem 2rem;
           }
        }
      `}</style>
    </div>
  );
}
