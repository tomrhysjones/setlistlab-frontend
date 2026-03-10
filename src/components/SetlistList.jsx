export default function SetlistList({
  setlists,
  selectedSetlistId,
  onSelect,
  onDelete,
}) {
  return (
    <div className="card panel">
      <h2>Setlists</h2>

      {setlists.length === 0 ? (
        <p className="muted">No setlists yet</p>
      ) : (
        <ul className="item-list">
          {setlists.map((setlist) => (
            <li key={setlist._id} className="item-row">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <button
                  className={
                    selectedSetlistId === setlist._id
                      ? 'secondary active'
                      : 'secondary'
                  }
                  onClick={() => onSelect(setlist)}
                >
                  {setlist.name}
                </button>

                <button
                  type="button"
                  className="secondary"
                  onClick={() => onDelete(setlist._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}