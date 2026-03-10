import { useState } from 'react'

export default function SetlistForm({ onCreate }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      await onCreate({ name })
      setName('')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <h2>Create Setlist</h2>

      <input
        type="text"
        placeholder="Setlist name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <button type="submit" disabled={submitting}>
        {submitting ? 'Saving...' : 'Create Setlist'}
      </button>

      {error ? <p className="error-text">{error}</p> : null}
    </form>
  )
}