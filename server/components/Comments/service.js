import { checkComment } from './helpers.js'
import sql from './sql.js'

class CommentsService {
  async addComment(text, author, date, user, post) {
    checkComment(text, author, date)
    const comment = await sql.addComment(text, author, date, user.id, post.id)
    return comment
  }
  async updateComment(text, author, date, postID, commentID) {
    checkComment(text, author, date)
    const comm = await sql.updateComment(text, author, date, postID, commentID)
    return comm
  }
  async deleteComment(postID) {
    await sql.deleteComment(postID)
  }
  async showAllComments(post) {
    const comments = await sql.getAllComments(post.id)
    return comments
  }
}

export default new CommentsService()
