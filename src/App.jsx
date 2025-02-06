import { useState } from "react"
import Dashboard from "./components/Dashboard"
import SignIn from "./components/SignIn"
import UpdatePassword from "./components/updatePassword"

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showUpdatePassword, setShowUpdatePassword] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  const handleLogin = (email) => {
    setIsAuthenticated(true)
    setUserEmail(email)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserEmail("")
    setShowUpdatePassword(false)
  }

  if (!isAuthenticated) {
    return <SignIn onLogin={handleLogin} />
  }

  if (showUpdatePassword) {
    return (
      <UpdatePassword
        email={userEmail}
        onPasswordUpdated={() => setShowUpdatePassword(false)}
        onCancel={() => setShowUpdatePassword(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-semibold">TheMemetv Tracker</span>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">{userEmail}</span>
              <button onClick={() => setShowUpdatePassword(true)} className="text-blue-500 hover:text-blue-600">
                Update Password
              </button>
              <button onClick={handleLogout} className="text-red-500 hover:text-red-600">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Dashboard />
    </div>
  )
}

