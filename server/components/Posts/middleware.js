import errorHandler from '../../errorHandler.js'
import { getUserByID } from '../Auth/index.js'
import { normalizePost } from './helpers.js'
import sql from './sql.js'

export async function checkPostIDAndSetPost(req, res, next) {
  const postID = req.params.postID
  if (!isFinite(postID)) {
    const error = { status: 422, message: 'Некорректный id поста' }
    return errorHandler(error, req, res)
  }
  const post = await sql.getPost(postID)
  if (!post) {
    const error = { status: 422, message: 'Такого поста не сущетсвует' }
    return errorHandler(error, req, res)
  }

  req.post = post
  next()
}

export async function getUserOfPosts(req, res, next) {
  const post = req.post
  const user = await getUserByID(+post.id_user)
  const normalizedPost = normalizePost(post, user)
  req.post = normalizedPost
  next()
}
