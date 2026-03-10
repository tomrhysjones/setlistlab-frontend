import { useState } from 'react'
import { useAuth } from '../context/useAuth'

export default function LoginForm() {
  const { login, loading } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

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

    try {
      await login(form.email, form.password)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="auth-page">
      <form className="card form-card" onSubmit={handleSubmit}>
        <h1>SetlistLab</h1>
        <p className="muted">Login to manage songs and setlists</p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {error ? <p className="error-text">{error}</p> : null}
      </form>
    </div>
  )
}