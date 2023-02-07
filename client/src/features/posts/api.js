import consts from '@/shared/consts'
const api = consts.serverAPI

class PostsAPI {
  async getAllPosts(token) {
    try {
      const response = await fetch(`${api}/posts/getAll`, {
        method: 'GET',
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
  async createPost(token, title, text_post, date_pub) {
    try {
      const response = await fetch(`${api}/post/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, text_post, date_pub }),
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async getPost(token, postID) {
    try {
      const response = await fetch(`${api}/post/get/${postID}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, text_post, date_pub }),
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async deletePost(token, postID) {
    try {
      const response = await fetch(`${api}/post/delete/${postID}`, {
        method: 'DELETE',
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

  async updatePost(token, postID, title, text_post, date_pub) {
    try {
      const response = await fetch(`${api}/post/update/${postID}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, text_post, date_pub }),
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async getPosts(token, searcText) {
    try {
      const response = await fetch(`${api}/post/search/${searcText}`, {
        method: 'GET',
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

export default new PostsAPI()
