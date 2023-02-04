import sql from './sql.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserService {
  async createToken(payload) {
    return await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
  }

  async registerUser(username, email, password) {
    const hasUserInDB = await sql.getUser(email, username)

    if (hasUserInDB) {
      throw { status: 422, message: 'Пользователь уже существует' }
    }

    const hashPassword = await bcrypt.hash(password, 3)
    const user = await sql.createUser(email, username, hashPassword)

    return this.createToken(user)
  }

  async loginUser(username, password) {
    const user = await sql.getUser(username, username)
    if (!user) throw { status: 422, message: 'Пользователя не существует' }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) throw { status: 401, message: 'Неправильный пароль' }

    return this.createToken(user)
  }
}

export default new UserService()
