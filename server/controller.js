import userService from './services.js'
import sql from './sql.js'
import bcrypt from 'bcrypt'

async function registerUser(req, res) {
  try {
    const { login, email, password } = req.body
    const user = await sql.getUser(email, login)
    if (user) return res.end('Пользователь уже существует')
    const token = await userService.registerUser(login, email, password)
    res.end(token)
  } catch (error) {
    console.log(error)
  }
}

async function loginUser(req, res) {
  try {
    const { username, password } = req.body
    const user = await sql.getUser(username, username)
    if (!user) {
      return res.end('Нет такого пользовтателя')
    }
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.end('Неверный пароль')
    }

    const token = await userService.loginUser(username, password)
    res.json(token)
  } catch (error) {
    console.log(error)
  }
}

async function logout(req, res) {
  try {
  } catch (error) {
    console.log(error)
  }
}
async function addPost(req, res) {
  try {
    const { title, text_post, date_pub } = req.body
    await userService.addPost(title, text_post, date_pub)
    console.log(req.user)
  } catch (error) {
    console.log(error)
  }
}
async function getPostById(req, res) {
  try {
    const { username, password } = req.body
  } catch (error) {
    console.log(error)
  }
}
async function logoutUser(req, res) {
  try {
  } catch (error) {
    console.log(error)
  }
}
async function deletePostById(req, res) {
  try {
  } catch (error) {
    console.log(error)
  }
}
async function postUpdateById(req, res) {
  try {
    const { title, text, date_pub } = req.body
  } catch (error) {
    console.log(error)
  }
}
async function searchPost(req, res) {
  try {
    const { username, password } = req.body
  } catch (error) {
    console.log(error)
  }
}
async function addComment(req, res) {
  try {
    const { text, author, date } = req.body
  } catch (error) {
    console.log(error)
  }
}
async function updateComment(req, res) {
  try {
    const { username, password } = req.body
  } catch (error) {
    console.log(error)
  }
}

async function deleteComment(req, res) {
  try {
    const { username, password } = req.body
  } catch (error) {
    console.log(error)
  }
}
async function showAllComments(req, res) {
  try {
    // const { username, password } = req.body
  } catch (error) {
    console.log(error)
  }
}

export default {
  registerUser,
  loginUser,
  addPost,
  getPostById,
  logoutUser,
  deletePostById,
  postUpdateById,
  searchPost,
  addComment,
  updateComment,
  deleteComment,
  showAllComments,
}
// module.s = new Controllers()
