import errorHandler from '../../errorHandler.js'
import CommentsService from './service.js'

class CommentsController {
  async addComment(req, res) {
    try {
      const { text, author, date_time } = req.body
      const user = req.user
      const post = req.post
      const commentP = [text, author, date_time]
      const comment = await CommentsService.addComment(...commentP, user, post)
      res.status(201).json(comment)
    } catch (error) {
      errorHandler(error, req, res)
    }
  }
  async updateComment(req, res) {
    try {
      const { text, author, date_time } = req.body
      const post = req.post
      const commentParams = [text, author, date_time, post.id, req.comment.id]
      const comment = await CommentsService.updateComment(...commentParams)
      res.status(201).json(comment)
    } catch (error) {
      errorHandler(error, req, res)
    }
  }

  async deleteComment(req, res) {
    try {
      const comment = req.comment
      if (req.post.id_user !== req.user.id) {
        throw { status: 500, message: 'Вы не можете удалять чужие комменатрии' }
      }
      await CommentsService.deleteComment(comment.id)
      res.status(201).json({ message: 'Комменатрий удален' })
    } catch (error) {
      errorHandler(error, req, res)
    }
  }
  async showAllComments(req, res) {
    try {
      const comment = await CommentsService.showAllComments(req.post)
      res.status(201).json(comment)
    } catch (error) {
      errorHandler(error, req, res)
    }
  }
}

export default new CommentsController()
