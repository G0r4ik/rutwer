import { pQuery } from '../../db.js'

class Queries {
  async createUser(email, username, hashPassword) {
    const result = await pQuery(
      `INSERT INTO users(email, username, password, date_of_registration) VALUES($1, $2, $3, NOW()) RETURNING *`,
      [email, username, hashPassword]
    )
    return result[0]
  }

  async getUser(emailOrUsername) {
    const result = await pQuery(
      `SELECT * FROM users WHERE email = $1 OR username = $2`,
      [emailOrUsername, emailOrUsername]
    )
    return result[0]
  }
  async getUserByID(id) {
    const result = await pQuery(`SELECT * FROM users WHERE id = $1`, [id])
    return result[0]
  }
}

export default new Queries()
