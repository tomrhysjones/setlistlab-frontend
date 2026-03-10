import { useEffect, useMemo, useState } from 'react'

export default function SetlistDetail({
  setlist,
  songs,
  onAddSongs,
  onRemoveSong,
}) {
  const [selectedSongIds, setSelectedSongIds] = useState([])
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setSelectedSongIds([])
    setError('')
  }, [setlist?._id])

  const existingSongIds = useMemo(() => {
    if (!setlist?.songs) return []
    return setlist.songs.map((song) => (typeof song === 'string' ? song : song._id))
  }, [setlist])

  const availableSongs = useMemo(() => {
    return songs.filter((song) => !existingSongIds.includes(song._id))
  }, [songs, existingSongIds])

  function toggleSong(songId) {
    setSelectedSongIds((prev) =>
      prev.includes(songId)
        ? prev.filter((id) => id !== songId)
        : [...prev, songId]
    )
  }

  async function handleAddSongs() {
    if (!setlist || selectedSongIds.length === 0) return

    setError('')
    setSubmitting(true)

    try {
      await onAddSongs(setlist._id, selectedSongIds)
      setSelectedSongIds([])
    } catch (err) {
      setError(err.message || 'Request failed')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleRemoveSong(songId) {
    if (!setlist) return

    setError('')
    setSubmitting(true)

    try {
      await onRemoveSong(setlist._id, songId)
    } catch (err) {
      setError(err.message || 'Request failed')
    } finally {
      setSubmitting(false)
    }
  }

  if (!setlist) {
    return (
      <div className="card panel">
        <h2>Setlist Details</h2>
        <p className="muted">Select a setlist</p>
      </div>
    )
  }

  return (
    <div className="card panel">
      <h2>{setlist.name}</h2>

      <div className="section-block">
        <h3>Current Songs</h3>

        {setlist.songs?.length ? (
          <ul className="item-list">
            {setlist.songs.map((song) => {
              const key = typeof song === 'string' ? song : song._id
              const label =
                typeof song === 'string'
                  ? song
                  : `${song.title} — ${song.artist}`

              return (
                <li key={key} className="item-row">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span>{label}</span>

                    {typeof song !== 'string' ? (
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => handleRemoveSong(song._id)}
                        disabled={submitting}
                      >
                        Remove
                      </button>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="muted">No songs in this setlist</p>
        )}
      </div>

      <div className="section-block">
        <h3>Add Songs</h3>

        {availableSongs.length === 0 ? (
          <p className="muted">No available songs to add</p>
        ) : (
          <>
            <div className="checkbox-list">
              {availableSongs.map((song) => (
                <label key={song._id} className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={selectedSongIds.includes(song._id)}
                    onChange={() => toggleSong(song._id)}
                  />
                  <span>{song.title} — {song.artist}</span>
                </label>
              ))}
            </div>

            <button
              onClick={handleAddSongs}
              disabled={submitting || selectedSongIds.length === 0}
            >
              {submitting ? 'Working...' : 'Add Selected Songs'}
            </button>
          </>
        )}

        {error ? <p className="error-text">{error}</p> : null}
      </div>
    </div>
  )
}