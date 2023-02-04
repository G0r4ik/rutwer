export function normalizePost(post, user = {}) {
  console.log(post, user)
  const normalizeUser = {
    username: user.username || post.username,
    email: user.email || post.email,
    userID: user.id || post.id_user,
  }
  const normalizePost = {
    title: post.title,
    text: post.title,
    date: post.date,
    postID: post.id,
    user: normalizeUser,
  }
  return normalizePost
}

export function checkPostData(title, text_post, date_pub) {
  console.log(date_pub)
  if (title.length < 5) {
    throw { status: 500, message: 'Длинна названия поста минимум 5 симовлов' }
  }
  if (text_post.length < 5) {
    throw { status: 500, message: 'Длинна текста поста минимум 5 симовлов' }
  }
  if (!Date.parse(date_pub)) {
    throw { status: 500, message: 'Некорректная дата публикации' }
  }
}
