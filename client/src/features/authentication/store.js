import { defineStore } from 'pinia'
import api from './api'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: localStorage.getItem('authToken') || null,
      user: JSON.parse(localStorage.getItem('user')) || null,
    }
  },
  actions: {
    logout() {
      localStorage.removeItem('authToken')
      this.token = null
      localStorage.removeItem('user')
      this.user = null
    },
    setAuthToken(token) {
      localStorage.setItem('authToken', token)
      this.token = token
    },
    setUser(token) {
      localStorage.setItem('user', JSON.stringify(token))
      this.user = token
    },
    async checkAuthToken() {
      const result = await api.checkAuthToken(this.token)
      if (!result.result) {
        localStorage.removeItem('authToken')
        this.token = null
        localStorage.removeItem('user')
        this.user = null
      }
    },
  },
})
