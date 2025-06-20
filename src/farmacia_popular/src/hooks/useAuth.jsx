// src/hooks/useAuth.js
import { useState } from 'react'
import { authService } from '../services/auth'

export function useAuth() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async (username, password) => {
    setLoading(true)
    setError(null)
    
    try {
      const user = await authService.login(username, password)
      localStorage.setItem('access_token', user.token)
      setLoading(false)
      return user
    } catch (err) {
      setError(err.message || 'Erro no login')
      setLoading(false)
      throw err
    }
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    authService.logout()
  }

  const isAuthenticated = () => {
    return !!localStorage.getItem('access_token')
  }

  return { login, logout, isAuthenticated, error, loading }
}
