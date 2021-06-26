export default function AppThemes({ themes, callback }) {
    return (
      <div className="theme-list">
        {themes.map((b) => (
          <button key={b} onClick={() => callback(b)}>
            {b}
          </button>
        ))}
      </div>
    );
  }