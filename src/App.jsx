import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      try {
        const parsed = JSON.parse(loggedInUser)
        if (parsed && parsed.role) {
          setUser(parsed.role)
          setLoggedInUserData(parsed.data || null)
        }
      } catch {
        localStorage.removeItem('loggedInUser')
      }
    }
  }, [])

  const handleLogin = (email, password) => {
    const adminData = JSON.parse(localStorage.getItem('admin')) || []
    const adminUser = adminData.find(a => a.email === email && a.password === password)

    if (adminUser) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return { success: true }
    }

    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const employee = employees.find(e => e.email === email && e.password === password)
    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      return { success: true }
    }

    return { success: false, message: 'Invalid email or password.' }
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setLoggedInUserData(null)
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={handleLogout} />}
      {user === 'employee' && <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />}
    </>
  )
}

export default App
