import { useState } from 'react'

export default function SongForm({ onCreate }) {
  const [form, setForm] = useState({
    title: '',
    artist: '',
  })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      await onCreate(form)
      setForm({ title: '', artist: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <h2>Create Song</h2>

      <input
        type="text"
        name="title"
        placeholder="Song title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="artist"
        placeholder="Artist"
        value={form.artist}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={submitting}>
        {submitting ? 'Saving...' : 'Create Song'}
      </button>

      {error ? <p className="error-text">{error}</p> : null}
    </form>
  )
}