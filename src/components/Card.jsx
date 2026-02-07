export default function Card({ children, className = '', highlight = false }) {
    return (
        <div className={`card ${className} ${highlight ? 'highlight' : ''}`}>
            {children}
            <style>{`
        .card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          margin-bottom: 1.25rem;
        }

        .card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }
        
        .card.highlight {
          border-color: var(--primary-blue-light);
          background: linear-gradient(to bottom, rgba(79, 195, 247, 0.03), var(--bg-primary));
        }
      `}</style>
        </div>
    );
}
