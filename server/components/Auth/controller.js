import userService from './service.js'
import handleError from '../../errorHandler.js'

class UserController {
  async registerUser(req, res) {
    try {
      const { username, email, password } = req.body
      const token = await userService.registerUser(username, email, password)
      console.log({ token })
      res.status(200).json({ token })
    } catch (error) {
      handleError(error, req, res)
    }
  }

  async loginUser(req, res) {
    try {
      const { username, password } = req.body
      const token = await userService.loginUser(username, password)
      res.status(200).json({ token })
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
