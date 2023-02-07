export function checkLoginV(login, error) {
  error.login = ''
  if (login.length < 5) error.login = 'Логин не может быть меньше 5 символов'
}

export function checkPasswordV(password, error) {
  error.password = ''
  if (password.length < 5) {
    error.password = 'Пароль не может быть меньше 5 символов'
  }
}

export function checkEmailV(email, error) {
  error.email = ''
  if (!/\S+@\S+\.\S+/.test(email)) error.email = 'Неверный формат почты'
}

export function isValidDataV(error) {
  return Object.values(error).every(c => c === '')
}
