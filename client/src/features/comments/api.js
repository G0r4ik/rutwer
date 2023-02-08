import consts from '@/shared/consts'
const api = consts.serverAPI

class CommentsAPI {
  async addComment(token, postID, text, author, date_time) {
    try {
      const response = await fetch(`${api}/post/${postID}/comments/add`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, author, date_time }),
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async updateComment(token, commentID, postID, text, author, date_time) {
    try {
      const response = await fetch(
        `${api}/post/${postID}/comments/update/${commentID}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text, author, date_time }),
        }
      )
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async deleteComment(token, postID, commentID) {
    try {
      const response = await fetch(
        `${api}/post/${postID}/comments/delete/${commentID}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async showAllComments(token, postID) {
    try {
      const response = await fetch(`${api}/post/${postID}/comments/showAll`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }
}
export default new CommentsAPI()
