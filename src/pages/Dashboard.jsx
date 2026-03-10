import { useEffect, useState, useCallback } from 'react'
import { useAuth } from '../context/useAuth'
import { getSongs, createSong, deleteSong } from '../api/songs'
import {
  getSetlists,
  createSetlist,
  addSongsToSetlist,
  removeSongFromSetlist,
  deleteSetlist,
} from '../api/setlists'
import SongForm from '../components/SongForm'
import SetlistForm from '../components/SetlistForm'
import SongList from '../components/SongList'
import SetlistList from '../components/SetlistList'
import SetlistDetail from '../components/SetlistDetail'

export default function Dashboard() {
  const { logout } = useAuth()

  const [songs, setSongs] = useState([])
  const [setlists, setSetlists] = useState([])
  const [selectedSetlistId, setSelectedSetlistId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadData = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const [songsData, setlistsData] = await Promise.all([
        getSongs(),
        getSetlists(),
      ])

      const songsArray = Array.isArray(songsData)
        ? songsData
        : songsData.songs || []

      const setlistsArray = Array.isArray(setlistsData)
        ? setlistsData
        : setlistsData.setlists || []

      setSongs(songsArray)
      setSetlists(setlistsArray)

      if (setlistsArray.length > 0) {
        const selectedStillExists = setlistsArray.some(
          (item) => item._id === selectedSetlistId
        )

        if (!selectedSetlistId || !selectedStillExists) {
          setSelectedSetlistId(setlistsArray[0]._id)
        }
      } else {
        setSelectedSetlistId(null)
      }
    } catch (err) {
      setError(err.message || 'Request failed')
    } finally {
      setLoading(false)
    }
  }, [selectedSetlistId])

  useEffect(() => {
    loadData()
  }, [loadData])

  async function handleCreateSong(payload) {
    await createSong(payload)
    await loadData()
  }

  async function handleCreateSetlist(payload) {
    await createSetlist(payload)
    await loadData()
  }

  async function handleAddSongsToSetlist(setlistId, songIds) {
    await addSongsToSetlist(setlistId, songIds)
    await loadData()
  }

  async function handleRemoveSongFromSetlist(setlistId, songId) {
    await removeSongFromSetlist(setlistId, songId)
    await loadData()
  }

  async function handleDeleteSetlist(setlistId) {
    await deleteSetlist(setlistId)
    await loadData()
  }

  async function handleDeleteSong(songId) {
    await deleteSong(songId)
    await loadData()
  }

  const selectedSetlist =
    setlists.find((item) => item._id === selectedSetlistId) || null

  return (
    <div className="dashboard">
      <header className="topbar">
        <div>
          <h1>SetlistLab</h1>
          <p className="muted">Manage songs and build setlists</p>
        </div>

        <button className="secondary" onClick={logout}>
          Logout
        </button>
      </header>

      {error ? <div className="card error-banner">{error}</div> : null}

      {loading ? (
        <div className="card panel">Loading...</div>
      ) : (
        <>
          <section className="form-grid">
            <SongForm onCreate={handleCreateSong} />
            <SetlistForm onCreate={handleCreateSetlist} />
          </section>

          <section className="content-grid">
           

            <SongList
              songs={selectedSetlist?.songs || []}
              onDelete={handleDeleteSong}
            />

            <SetlistList
              setlists={setlists}
              selectedSetlistId={selectedSetlistId}
              onSelect={(setlist) => setSelectedSetlistId(setlist._id)}
              onDelete={handleDeleteSetlist}
            />

            <SetlistDetail
              setlist={selectedSetlist}
              songs={songs}
              onAddSongs={handleAddSongsToSetlist}
              onRemoveSong={handleRemoveSongFromSetlist}
            />
          </section>
        </>
      )}
    </div>
  )
}