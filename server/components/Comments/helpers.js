export function checkComment(text, author, date) {
  if (text.length < 5) {
    throw { status: 500, message: 'Длинна комменатрия минимум 5 симовлов' }
  }
  if (author.length < 5) {
    throw { status: 500, message: 'Имя автора должно быть минимум 5 симовлов' }
  }
  if (!Date.parse(date)) {
    throw { status: 500, message: 'Некорректная дата публикации' }
  }
}
