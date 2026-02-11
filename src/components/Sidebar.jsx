export default function Sidebar({ weeks, currentWeekId, currentDay, onSelectWeek, onSelectDay }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="logo-icon">💪</span>
        <span className="logo-text">RehabProtocol</span>
      </div>

      <nav className="sidebar-nav">
        {weeks.map(week => {
          const isWeekActive = week.id === currentWeekId;
          // Extract short label e.g., "Week 0-1"
          const label = week.title.split(':')[0];

          return (
            <div key={week.id} className={`nav-group ${isWeekActive ? 'active' : ''}`}>
              <button
                className={`nav-item week-item ${isWeekActive ? 'active' : ''}`}
                onClick={() => onSelectWeek(week.id)}
              >
                {label}
              </button>

              {isWeekActive && (
                <div className="day-list">
                  {[1, 2, 3, 4, 5, 6, 7].map(day => (
                    <button
                      key={day}
                      className={`nav-item day-item ${currentDay === day ? 'active' : ''}`}
                      onClick={() => onSelectDay(day)}
                    >
                      Day {day}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <style>{`
        .sidebar {
          width: 280px;
          background: transparent; /* Floating look */
          /* border-right: 1px solid var(--border-color); Removed for floating style */
          height: calc(100vh - 2rem);
          position: sticky;
          top: 1rem;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          overflow-y: auto;
          margin: 1rem 0 1rem 1rem;
          padding-right: 1rem; /* Gap between sidebar and content */
        }

        .sidebar-header {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
          background: var(--bg-primary);
          border-radius: var(--radius-md);
          margin-bottom: 1rem; /* Detached header */
          box-shadow: var(--shadow-sm);
        }

        .logo-icon {
          font-size: 1.5rem;
          background: var(--primary-blue);
          color: white;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .sidebar-nav {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: var(--bg-primary);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          flex: 1;
        }

        .nav-item {
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .nav-item:hover {
          background: var(--bg-secondary);
          color: var(--primary-blue);
        }

        .week-item {
          font-weight: 600;
        }

        .week-item.active {
          background: var(--bg-secondary);
          color: var(--primary-blue-dark);
        }

        .day-list {
          margin-left: 1rem;
          padding-left: 0.5rem;
          border-left: 2px solid var(--border-light);
          margin-top: 0.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .day-item {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
        }

        .day-item.active {
          color: var(--primary-blue);
          font-weight: 600;
          background: linear-gradient(to right, var(--bg-secondary), transparent);
        }
      `}</style>
    </aside>
  );
}
