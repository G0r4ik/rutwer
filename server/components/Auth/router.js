import Router from 'express'
import controller from './controller.js'
import { checkEmail, checkPassword, checkUsername } from './middleware.js'
const UserRoute = new Router()

UserRoute.post('/api/checkAuthToken', controller.checkAuthToken)
UserRoute.post(
  '/api/register',
  checkUsername,
  checkEmail,
  checkPassword,
  controller.registerUser
)
UserRoute.post('/api/login', checkUsername, controller.loginUser)
UserRoute.post('/api/logout', controller.logoutUser)

export default UserRoute
