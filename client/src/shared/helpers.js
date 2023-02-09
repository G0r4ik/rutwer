export function normalizeDate(date) {
  return new Date(date).toLocaleString('ru-RU', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  })
}

export function untiNormalizeDate(date) {
  return new Date(date).toISOString()
}

export function handleError(error) {
  if (error.response) {
    console.error(error.response.data)
    return { error: error.response.data }
  }
  if (error.request) {
    console.error('Сервер выключен или у вас проблемы с интернетом')
    return {
      error: { message: 'Сервер выключен или у вас проблемы с интернетом' },
    }
  }
  console.error('Error', error.message)
}
