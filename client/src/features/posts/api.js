import axios from 'axios'
import consts from '@/shared/consts'
import { useAuthStore } from '@/features/authorization'
const api = consts.serverAPI
import { handleError } from '@/shared/helpers'

const instance = axios.create({ baseURL: api })

instance.interceptors.request.use(config => {
  const authStore = useAuthStore()
  config.headers.Authorization = `Bearer ${authStore.token}`
  config.headers.Accept = 'application/json'
  return config
})

class PostsAPI {
  async getAllPosts() {
    try {
      const response = await instance.get('/posts/getAll')
      return response.data
    } catch (error) {
      return handleError(error)
    }
  }

  async createPost(title, text_post, date_pub) {
    try {
      const body = { title, text_post, date_pub }
      const response = await instance.post('/post/create', body)
      return response.data
    } catch (error) {
      return handleError(error)
    }
  }

  async deletePost(postID) {
    try {
      const response = await instance.delete(`/post/delete/${postID}`)
      return response.data
    } catch (error) {
      return handleError(error)
    }
  }

  async updatePost(postID, title, text_post, date_pub) {
    try {
      const body = { title, text_post, date_pub }
      const response = await instance.put(`/post/update/${postID}`, body)
      return response.data
    } catch (error) {
      return handleError(error)
    }
  }

  // async searchPosts(searchText) {
  //   try {
  //     const response = await instance.get(`/post/search/${searchText}`)
  //     return response.data
  //   } catch (error) {
  //     return handleError(error)
  //   }
  // }

  // async getPost(postID) {
  //   try {
  //     const response = await instance.get(`/post/get/${postID}`)
  //     return response.data
  //   } catch (error) {
  //     return handleError(error)
  //   }
  // }
}

export default new PostsAPI()
