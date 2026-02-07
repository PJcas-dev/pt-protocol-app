import { useState, useEffect } from 'react';

export default function Timer({ initialTime = 0 }) {
    // Mode: 'stopwatch' (default) or 'timer' if we wanted countdown in future
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const toggleTimer = () => setIsRunning(!isRunning);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="timer-container">
            <div className="time-display">{formatTime(time)}</div>
            <div className="timer-controls">
                <button
                    className={`timer-btn ${isRunning ? 'pause' : 'start'}`}
                    onClick={toggleTimer}
                    aria-label={isRunning ? 'Pause Timer' : 'Start Timer'}
                >
                    {isRunning ? '⏸' : '▶'}
                </button>
                <button
                    className="timer-btn reset"
                    onClick={resetTimer}
                    aria-label="Reset Timer"
                    disabled={time === 0 && !isRunning}
                >
                    ↺
                </button>
            </div>

            <style>{`
        .timer-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--bg-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px; /* Pill shape */
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }

        .time-display {
          font-family: monospace;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          min-width: 3rem;
          text-align: center;
        }

        .timer-controls {
          display: flex;
          gap: 0.5rem;
        }

        .timer-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition);
          border: none;
        }

        .timer-btn.start {
          background: var(--primary-blue);
          color: white;
          box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
        }

        .timer-btn.start:hover {
          background: var(--primary-blue-dark);
          transform: translateY(-1px);
        }

        .timer-btn.pause {
          background: #FF9F0A; /* Orange for pause */
          color: white;
          box-shadow: 0 4px 12px rgba(255, 159, 10, 0.3);
        }

        .timer-btn.reset {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .timer-btn.reset:hover:not(:disabled) {
          background: #E5E5EA;
          color: var(--text-primary);
        }
        
        .timer-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
        </div>
    );
}
