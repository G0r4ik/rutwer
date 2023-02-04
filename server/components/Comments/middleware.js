import errorHandler from '../../errorHandler.js'
import sql from './sql.js'

export async function checkComment(req, res, next) {
  const commentID = req.params.commentID
  if (!isFinite(commentID)) {
    const error = { status: 422, message: 'Некорректный id комменатрия' }
    return errorHandler(error, req, res)
  }

  const comment = await sql.getComment(commentID)
  if (!comment) {
    const error = { status: 422, message: 'Такого комменатрия не сущетсвует' }
    return errorHandler(error, req, res)
  }
  req.comment = comment
  next()
}
