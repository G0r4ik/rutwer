import jwt from 'jsonwebtoken'
import errorHandler from '../../errorHandler.js'

export function checkUsername(req, res, next) {
  if (req.body.username.length < 5) {
    const error = {}
    error.status = 422
    error.message = 'Имя пользователя не может быть меньше 5 символов'
    return errorHandler(error, req, res)
  }
  next()
}

export function checkPassword(req, res, next) {
  if (req.body.password.length < 5) {
    const error = {}
    error.status = 422
    error.message = 'Пароль не может быть меньше 5 символов'
    return errorHandler(error, req, res)
  }
  next()
}

export function checkEmail(req, res, next) {
  // check valid email @
  if (req.body.password.length < 5) {
    const error = {}
    error.status = 422
    error.message = 'Некорректно введена почта'
    return errorHandler(error, req, res)
  }
  next()
}

export function checkAuthToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    return errorHandler({ status: 500, message: 'Токен не валидный' }, req, res)
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return errorHandler(
        { status: 500, message: 'Истекло действие токена' },
        req,
        res
      )
    }
    req.user = user
    next()
  })
}
