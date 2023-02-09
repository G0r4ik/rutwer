import { defineStore } from 'pinia'
import api from './api'

function checkUser() {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
  } catch (error) {
    return null
  }
}

export const useAuthStore = defineStore('auth', {
  created() {},
  state: () => ({
    token: localStorage.getItem('authToken') || null,
    user: checkUser(),
  }),
  actions: {
    logout() {
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      this.token = null
      this.user = null
    },
    setAuthToken(token) {
      localStorage.setItem('authToken', token)
      this.token = token
    },
    setUser(user) {
      localStorage.setItem('user', JSON.stringify(user))
      this.user = user
    },

    async checkAuthToken() {
      const data = await api.checkAuthToken(this.token)
      if (data.isValid) return

      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      this.token = null
      this.user = null
    },
  },
})
