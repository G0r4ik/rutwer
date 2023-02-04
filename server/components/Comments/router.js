import Router from 'express'
import { checkPostIDAndSetPost } from '../Posts/index.js'
import { checkAuthToken } from '../Auth/index.js'
import { checkComment } from './middleware.js'
import CommentsController from './controller.js'

const CommentsRoute = new Router()
CommentsRoute.post(
  `/post/:postID/comments/add`,
  checkAuthToken,
  checkPostIDAndSetPost,
  CommentsController.addComment
)
CommentsRoute.put(
  `/post/:postID/comments/update/:commentID`,
  checkAuthToken,
  checkPostIDAndSetPost,
  checkComment,
  CommentsController.updateComment
)
CommentsRoute.delete(
  `/post/:postID/comments/delete/:commentID`,
  checkAuthToken,
  checkPostIDAndSetPost,
  checkComment,
  CommentsController.deleteComment
)
CommentsRoute.get(
  `/post/:postID/comments/showAll`,
  checkAuthToken,
  checkPostIDAndSetPost,
  CommentsController.showAllComments
)

export default CommentsRoute
