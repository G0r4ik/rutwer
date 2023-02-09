import consts from '@/shared/consts'
const api = consts.serverAPI

import axios from 'axios'
const instance = axios.create({ baseURL: api + '/post' })
import { useAuthStore } from '@/features/authorization'

instance.interceptors.request.use(config => {
  const authStore = useAuthStore()
  config.headers.Authorization = `Bearer ${authStore.token}`
  config.headers.Accept = 'application/json'
  return config
})

class CommentsAPI {
  async addComment(postID, text, author, date_time) {
    try {
      const body = { text, author, date_time }
      const response = await instance.post(`/${postID}/comments/add`, body)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async updateComment(commentID, postID, text, author, date_time) {
    try {
      const response = await instance.put(
        `/${postID}/comments/update/${commentID}`,
        { text, author, date_time }
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async deleteComment(postID, commentID) {
    try {
      const response = await instance.delete(
        `/${postID}/comments/delete/${commentID}`
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async showAllComments(postID) {
    try {
      const response = await instance.get(`/${postID}/comments/showAll`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

export default new CommentsAPI()
