import Router from 'express'
import { checkAuthToken } from '../Auth/index.js'
import controller from './controller.js'
import { checkPostIDAndSetPost, getUserOfPosts } from './middleware.js'

const PostsRoute = new Router()
PostsRoute.get('/api/posts/getAll', checkAuthToken, controller.getAllPosts)
PostsRoute.post('/api/post/create', checkAuthToken, controller.addPost)
PostsRoute.get(
  `/api/post/get/:postID`,
  checkAuthToken,
  checkPostIDAndSetPost,
  getUserOfPosts,
  controller.getPostByID
)
PostsRoute.put(
  `/api/post/update/:postID`,
  checkAuthToken,
  checkPostIDAndSetPost,
  controller.postUpdateByID
)
PostsRoute.delete(
  `/api/post/delete/:postID`,
  checkAuthToken,
  checkPostIDAndSetPost,
  controller.deletePostByID
)
PostsRoute.get(`/post/search/:text`, checkAuthToken, controller.searchPost)

export default PostsRoute
