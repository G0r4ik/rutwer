import p from './db.js'

async function pQuery(query, args = []) {
  const response = await p.query(query, [...args])
  return response.rows
}

const qStr = {
  getUser: `SELECT * FROM users WHERE email = $1 OR login = $2`,
  createUser: `INSERT INTO users(email, login, password, date_of_registration) VALUES($1, $2, $3, NOW())`,

  createPost: `INSERT INTO posts(title, text, date, id_user) VALUES ($1,$2, $3, $4)`,
  getPost: `SELECT * FROM posts WHERE id = $1`,
  updatePost: `UPDATE post SET title = $1;UPDATE post SET text = $2;UPDATE post SET date = $3;`,
  deletePost: ` DELETE FROM posts WHERE id = $1 `,
  searchPost: `SELECT * FROM posts WHERE text LIKE '%$1% AND title LIKE '%$1%  '`,
  addComment: `INSERT INTO comments(text, date, id_user, id_post) VALUES($1,$2,$3,$4)`,
  deleteComment: `DELETE FROM comments WHERE id_comment = $1`,
  getAllComments: `SELECT * FROM comments WHERE id_post = $1`,
}

class Queries {
  async getPost(postId) {
    const response = await pQuery(qStr.getPost, [postId])
    return response[0]
  }
  async updatePost(postId) {
    const response = await pQuery(qStr.updatePost, [postId])
    return response[0]
  }
  async deletePost(postId) {
    const response = await pQuery(qStr.deletePost, [postId])
    return response[0]
  }
  async searchPost(postId) {
    const response = await pQuery(qStr.searchPost, [postId])
    return response[0]
  }
  async addComment(postId) {
    const response = await pQuery(qStr.addComment, [postId])
    return response[0]
  }
  async deleteComment(postId, commentId) {
    const response = await pQuery(qStr.deleteComment, [postId, commentId])
    return response[0]
  }
  async getAllComments(postId) {
    const response = await pQuery(qStr.getAllComments, [postId])
    return response[0]
  }

  async createUser(email, login, hashPassword) {
    const user = await pQuery(qStr.createUser, [email, login, hashPassword])
    return user[0]
  }
  async getUser(email, login) {
    const response = await pQuery(qStr.getUser, [email, login])
    return response[0]
  }
}
export default new Queries()
