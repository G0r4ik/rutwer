import { pQuery } from '../../db.js'

class Queries {
  async addComment(text, author, date, idUser, idPost) {
    const result = await pQuery(
      `INSERT INTO comments(text, author, date, id_user, id_post) VALUES($1,$2,$3,$4, $5) RETURNING *`,
      [text, author, date, idUser, idPost]
    )
    return result[0]
  }

  async updateComment(text, author, date, postID, commentID) {
    const result = await pQuery(
      `UPDATE comments SET text = $1, author = $2, date = $3 WHERE id_post = $4 AND id = $5 RETURNING *`,
      [text, author, date, postID, commentID]
    )
    return result[0]
  }

  async deleteComment(commentID) {
    const result = await pQuery(`DELETE FROM comments WHERE id = $1`, [
      commentID,
    ])
    return result[0]
  }

  async getAllComments(postID) {
    const result = await pQuery(`SELECT * FROM comments WHERE id_post = $1`, [
      postID,
    ])
    return result
  }
  async getComment(commentID) {
    const result = await pQuery('SELECT * FROM comments WHERE id = $1', [
      commentID,
    ])
    return result[0]
  }
}
export default new Queries()
