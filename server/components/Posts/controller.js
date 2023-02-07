import errorHandler from '../../errorHandler.js'
import PostsService from './service.js'

class PostsController {
  async getAllPosts(req, res) {
    try {
      const posts = await PostsService.getAllPosts()
      res.status(200).json(posts)
    } catch (error) {
      errorHandler(error, req, res)
    }
  }
  async addPost(req, res) {
    try {
      const { title, text_post, date_pub } = req.body
      const user = req.user
      const post = await PostsService.addPost(title, text_post, date_pub, user)
      res.status(201).json(post)
    } catch (error) {
      errorHandler(error, req, res)
    }
  }

  async getPostByID(req, res) {
    try {
      const post = await PostsService.getPostByID(req.post, req.user)
      res.status(201).json(post)
    } catch (error) {
      errorHandler(error, req, res)
    }
  }

  async deletePostByID(req, res) {
    try {
      const post = req.post
      const user = req.user
      await PostsService.deletePostByID(post, user)
      res.status(200).json({ message: 'Пост удален' })
    } catch (error) {
      errorHandler(error, req, res)
    }
  }

  async postUpdateByID(req, res) {
    try {
      const post = req.post
      const user = req.user
      const { title, text_post, date_pub } = req.body
      const updatedPost = await PostsService.postUpdateByID(
        title,
        text_post,
        date_pub,
        post,
        user
      )
      res.status(201).json(updatedPost)
    } catch (error) {
      errorHandler(error, req, res)
    }
  }

  async searchPost(req, res) {
    try {
      const searchText = req.params.text
      const posts = await PostsService.searchPost(searchText)

      res.status(200).json(posts)
    } catch (error) {
      errorHandler(error, req, res)
    }
  }
}

export default new PostsController()
