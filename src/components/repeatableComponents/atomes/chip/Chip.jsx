export const Chip = ({ label, onRemove }) => {
    return (
      <div className="chip">
        <span className="chip-label">{label}</span>
        <span className="chip-remove" onClick={onRemove}>
          X
        </span>
      </div>
    );
  };