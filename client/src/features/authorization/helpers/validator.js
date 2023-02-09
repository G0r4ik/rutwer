export function checkLoginV(login) {
  if (login.length < 5) return 'Логин не может быть меньше 5 символов'
  return ''
}

export function checkPasswordV(password) {
  if (password.length < 5) {
    return 'Пароль не может быть меньше 5 символов'
  }
  return ''
}

export function checkEmailV(email) {
  if (!/\S+@\S+\.\S+/.test(email)) return 'Неверный формат почты'
  return ''
}

export function isValidDataV(error) {
  return Object.values(error).every(c => c === '')
}
