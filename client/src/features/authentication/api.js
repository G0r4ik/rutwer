import consts from '@/shared/consts.js'
const api = consts.serverAPI

class AuthAPI {
  async checkAuthToken(token) {
    try {
      const response = await fetch(`${api}/checkAuthToken`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async registerUser(username, email, password) {
    try {
      const response = await fetch(`${api}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })
      const data = await response.json()
      if (response.status === 422 || response.status === 401) {
        return { error: data.message }
      }
      return { data }
    } catch (error) {
      console.error(error)
    }
  }

  async loginUser(username, password) {
    try {
      // const response = await fetch(`${api}/login`, {
      const response = await fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await response.json()
      if (response.status === 422 || response.status === 401) {
        return { error: data.message }
      }
      return { data }
    } catch (error) {
      // console.error(error)
    }
  }
  async logoutUser() {
    try {
      const response = await fetch(`${api}/logout`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

export default new AuthAPI()
