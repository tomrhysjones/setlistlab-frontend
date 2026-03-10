export default function SongList({ songs, onDelete }) {
  return (
    <div className="card panel">
      <h2>Songs</h2>

{songs.map(song => (
  <div key={song._id} className="item-row">
    <div>
      <strong>{song.title}</strong>
      <div className="muted">{song.artist}</div>
    </div>
    <button onClick={() => onDelete(song._id)}>Delete</button>
  </div>
))}
    </div>
  )
}