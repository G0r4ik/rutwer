import axios from 'axios'
import consts from '@/shared/consts.js'
import { handleError } from '@/shared/helpers'
const api = consts.serverAPI
const instance = axios.create({
  baseURL: api,
  headers: {
    'Content-Type': 'application/json',
  },
})

class AuthAPI {
  async checkAuthToken(token) {
    try {
      const response = await instance.post(
        `/checkAuthToken`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      return response.data
    } catch (error) {
      return handleError(error)
    }
  }

  async registerUser(username, email, password) {
    try {
      const body = { username, email, password }
      const response = await instance.post(`/register`, body)
      return response.data
    } catch (error) {
      return handleError(error)
    }
  }

  async loginUser(username, password) {
    try {
      const body = { username, password }
      const response = await instance.post(`/login`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return response.data
    } catch (error) {
      return handleError(error)
    }
  }

  // async logoutUser(token) {
  //   try {
  //     const response = await instance.post(
  //       `/logout`,
  //       {},
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     )
  //     return response.data
  //   } catch (error) {
  //     return handleError(error)
  //   }
  // }
}

export default new AuthAPI()
