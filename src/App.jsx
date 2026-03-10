import './App.css'
import LoginForm from './components/LoginForm'
import Dashboard from './pages/Dashboard'
import { useAuth } from './context/useAuth'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="app-shell">
      {isAuthenticated ? <Dashboard /> : <LoginForm />}
    </div>
  )
}

export default App