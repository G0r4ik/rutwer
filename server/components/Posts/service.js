import { checkPostData, normalizePost } from './helpers.js'
import sql from './sql.js'

class PostsService {
  async getAllPosts() {
    const posts = await sql.getAllPosts()
    posts.sort((a, b) => b.date - a.date)
    const normalizedPosts = []
    posts.forEach(post => normalizedPosts.push(normalizePost(post)))
    return normalizedPosts
  }
  async addPost(title, text_post, date_pub, user) {
    checkPostData(title, text_post, date_pub)
    const post = await sql.createPost(title, text_post, date_pub, user.id)
    const normalizedPost = normalizePost(post, user)
    return normalizedPost
  }

  async getPostByID(post, user) {
    const normalizedPost = normalizePost(post, user)
    return normalizedPost
  }

  async deletePostByID(post, user) {
    if (post.id_user !== user.id) {
      throw { status: 401, message: 'Вы не можете удалять чужие посты' }
    }
    await sql.deletePost(post.id)
  }

  async postUpdateByID(title, text, date, post, user) {
    if (post.id_user !== user.id) {
      throw { status: 401, message: 'Вы не можете обновлять чужие посты' }
    }
    checkPostData(title, text, date)
    const rPost = await sql.updatePost(title, text, date, post.id)
    const normalizedPost = normalizePost(rPost, user)
    return normalizedPost
  }

  async searchPost(keyword) {
    const posts = await sql.searchPost(keyword)
    const normalizedPosts = []
    posts.forEach(post => normalizedPosts.push(normalizePost(post)))
    return normalizedPosts
  }
}

export default new PostsService()
