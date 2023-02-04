import { checkAuthToken } from './middleware.js'
import UserRoute from './router.js'
import sql from './sql.js'

export { UserRoute, checkAuthToken }
export const getUserByID = sql.getUserByID
