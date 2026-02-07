import { useState } from 'react';
import Timer from './Timer';

export default function ExerciseItem({ exercise, isCompleted, onToggle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`exercise-item ${isCompleted ? 'completed' : ''}`}>
      <div className="exercise-header" onClick={() => setExpanded(!expanded)}>
        <button
          className={`check-btn ${isCompleted ? 'checked' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isCompleted && <span className="checkmark">&#10003;</span>}
        </button>

        <div className="exercise-info">
          <h3 className="exercise-name">{exercise.name}</h3>
          <div className="exercise-meta">
            {exercise.reps && <span>{exercise.reps}</span>}
            {exercise.sets && (
              <>
                <span className="separator">•</span>
                <span>{exercise.sets}</span>
              </>
            )}
            {exercise.duration && (
              <>
                <span className="separator">•</span>
                <span>{exercise.duration}</span>
              </>
            )}
          </div>
        </div>

        {/* Timer Icon if exercise has time-based rep/duration? Optional hint */}

        <button className="expand-btn">
          {expanded ? '-' : '+'}
        </button>
      </div>

      {expanded && (
        <div className="exercise-details">

          <div className="tools-section">
            <Timer />
          </div>

          {exercise.image && (
            <div className="exercise-image-container">
              <img src={exercise.image} alt={exercise.name} className="exercise-image" />
            </div>
          )}
          {exercise.description && <p className="description">{exercise.description}</p>}
          {exercise.instructions && (
            <div className="instructions">
              <strong>How to perform:</strong>
              <p>{exercise.instructions}</p>
            </div>
          )}
        </div>
      )}

      <style>{`
        .exercise-item {
          background: var(--bg-primary);
          /* Soft border or none for floating card style */
          border: 1px solid transparent; 
          box-shadow: var(--shadow-sm);
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
          transition: var(--transition);
          overflow: hidden;
        }

        .exercise-item:hover {
          background: var(--bg-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }
        
        .exercise-item.completed {
          opacity: 0.6;
          box-shadow: none;
          background: var(--bg-secondary);
        }

        .exercise-header {
          padding: 1.5rem; /* More breathing room */
          display: flex;
          align-items: center;
          gap: 1.25rem;
          cursor: pointer;
        }

        .check-btn {
          width: 32px;
          height: 32px;
          border-radius: 10px; /* Rounded rectangle (squircle behavior) */
          border: 2px solid var(--border-color);
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .check-btn:hover {
          border-color: var(--primary-blue);
        }

        .check-btn.checked {
          background: var(--primary-blue);
          border-color: var(--primary-blue);
          box-shadow: 0 4px 10px rgba(0, 122, 255, 0.2);
        }

        .checkmark {
          font-size: 1rem;
        }

        .exercise-info {
          flex: 1;
        }

        .exercise-name {
          font-size: 1.1rem; /* Slightly larger */
          margin: 0 0 0.25rem 0;
          color: var(--text-primary);
          font-weight: 700;
        }

        .exercise-meta {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        
        .exercise-meta span {
           display: inline-flex;
           align-items: center;
        }
        
        .exercise-meta .separator {
          margin: 0 4px;
          opacity: 0.3;
        }

        .expand-btn {
          background: var(--bg-secondary);
          border: none;
          color: var(--text-primary);
          font-size: 1.25rem;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: var(--transition);
        }

        .expand-btn:hover {
          background: var(--bg-app);
          color: var(--primary-blue);
        }

        .exercise-details {
          padding: 0 1.5rem 1.5rem 1.5rem;
          /* No top border, just whitespace */
          margin-top: 0;
        }

        .tools-section {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: flex-start;
        }

        .exercise-image-container {
          margin-bottom: 1.5rem;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: var(--bg-secondary);
          padding: 2rem;
          display: flex;
          justify-content: center;
        }

        .exercise-image {
          width: 100%;
          max-width: 320px;
          height: auto;
          display: block;
          mix-blend-mode: multiply; /* Helps blend white bg images if needed */
        }

        .description {
          margin: 0 0 1.5rem 0;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .instructions {
          background: var(--bg-app);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          /* Removed border-left for floating style */
        }

        .instructions strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .instructions p {
          margin: 0;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
