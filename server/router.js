import Router from 'express'
const router = new Router()
import controller from './controller.js'
import jwt from 'jsonwebtoken'

router.post('/register', [checkLogin], controller.registerUser)
router.post('/login', controller.loginUser)
router.post('/logout', controller.logoutUser)

router.post('/post', [authToken], controller.addPost)
router.get(`/post/:id`, controller.getPostById)
router.post(`/post/update/:id`, controller.postUpdateById)
router.delete(`/post/:id`, controller.deletePostById)
router.get(`/post/search/:text`, controller.searchPost)

router.post(`/post/:id/comment`, controller.addComment)
router.post(`/post/:id/comment/update/:commentId`, controller.updateComment)
router.delete(`/post/:id/comment/:commentId`, controller.deleteComment)
router.get(
  `/post/:id/comment/:commentId`,
  [authToken],
  controller.showAllComments
)

function authToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.end('Токен не валидный')
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.end('Истекло действие токена')
    req.user = user
    next()
  })
}

function checkLogin(req, res, next) {
  if (req.body.login === '') res.end('Не может быть пустым')
  if (req.body.login.length > 5) res.end('Не может быть меньше 5 символов')
  next()
}

export default router
