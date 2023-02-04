import { pQuery } from '../../db.js'

class Queries {
  async createPost(title, text, date, idUser) {
    const result = await pQuery(
      `INSERT INTO posts(title, text, date, id_user) VALUES ($1,$2, $3, $4) RETURNING *`,
      [title, text, date, idUser]
    )
    return result[0]
  }

  async getPost(postID) {
    const result = await pQuery(`SELECT * FROM posts WHERE id = $1`, [postID])
    return result[0]
  }

  async updatePost(title, text, date, postID) {
    const result = await pQuery(
      `UPDATE posts SET title = $1, text = $2, date = $3 WHERE id = $4 RETURNING *`,
      [title, text, date, postID]
    )
    return result[0]
  }

  async deletePost(postID) {
    const result = await pQuery(`DELETE FROM posts WHERE id = $1`, [postID])
    return result[0]
  }

  async searchPost(keyword) {
    return await pQuery(
      `SELECT p.*, u.*, p.id AS post_id FROM posts p
      LEFT JOIN users u ON p.id_user = u.id WHERE p.text LIKE $1`,
      [`%${keyword}%`]
    )
  }
}

export default new Queries()
// 34 39 39
