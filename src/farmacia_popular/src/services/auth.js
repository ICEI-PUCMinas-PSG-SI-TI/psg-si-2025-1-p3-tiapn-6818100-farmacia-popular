import api from './api'

export const authService = {
  async login(username, password) {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    const response = await api.post('/funcionarios/login', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    if (response.data.access_token) {
      localStorage.setItem('access_token', response.data.access_token);
      return { token: response.data.access_token, username };
    }
    throw new Error('Token não recebido')
  },

  logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('username')
    return api.post('/funcionarios/logout')
  },
}