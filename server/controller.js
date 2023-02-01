import userService from './services.js'

async function registerUser(req, res) {
  try {
    const { login, email, password } = req.body
    // if(login) return
    // if(email) return
    const token = await userService.registerUser(login, email, password)

    res.end(token)
  } catch (error) {}
}

async function loginUser(req, res) {
  try {
    const { username, password } = req.body
    const token = await userService.loginUser(username, password)
    res.json(token)
  } catch (error) {
    console.log(error)
  }
}
async function logout(req, res) {
  try {
    const tokens = { refreshToken, accessToken }
  } catch (error) {
    console.log(error)
  }
}
async function addPost(req, res) {
  try {
    const { title, text_post, date_pub } = req.body
    await userService.logout(refreshToken)
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
    const { username, password } = req.body
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
  console.log('a')
  try {
    // const { username, password } = req.body
    res.end('urrraaa')
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
