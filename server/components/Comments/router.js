import Router from 'express'
import { checkPostIDAndSetPost } from '../Posts/index.js'
import { checkAuthToken } from '../Auth/index.js'
import { checkComment } from './middleware.js'
import CommentsController from './controller.js'

const CommentsRoute = new Router()
CommentsRoute.post(
  `/api/post/:postID/comments/add`,
  checkAuthToken,
  checkPostIDAndSetPost,
  CommentsController.addComment
)
CommentsRoute.put(
  `/api/post/:postID/comments/update/:commentID`,
  checkAuthToken,
  checkPostIDAndSetPost,
  checkComment,
  CommentsController.updateComment
)
CommentsRoute.delete(
  `/api/post/:postID/comments/delete/:commentID`,
  checkAuthToken,
  checkPostIDAndSetPost,
  checkComment,
  CommentsController.deleteComment
)
CommentsRoute.get(
  `/api/post/:postID/comments/showAll`,
  checkAuthToken,
  checkPostIDAndSetPost,
  CommentsController.showAllComments
)

export default CommentsRoute
