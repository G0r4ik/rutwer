import userService from './service.js'
import handleError from '../../errorHandler.js'
import jwt from 'jsonwebtoken'

class UserController {
  async checkAuthToken(req, res) {
    try {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]
      if (!token) return res.status(200).json({ result: false })
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(200).json({ result: false })
        return res.status(200).json({ isValid: true })
      })
    } catch (error) {
      handleError(error, req, res)
    }
  }
  async registerUser(req, res) {
    try {
      const { username, email, password } = req.body
      const { token, user } = await userService.registerUser(
        username,
        email,
        password
      )
      res.status(200).json({ token, user })
    } catch (error) {
      handleError(error, req, res)
    }
  }

  async loginUser(req, res) {
    try {
      const { username, password } = req.body
      const { token, user } = await userService.loginUser(username, password)
      res.status(200).json({ token, user })
    } catch (error) {
      handleError(error, req, res)
    }
  }

  async logoutUser(req, res) {
    try {
      res.status(200).end('ok')
    } catch (error) {
      handleError(error, req, res)
    }
  }
}

export default new UserController()
