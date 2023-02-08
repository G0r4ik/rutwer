export function normalizeDate(date) {
  return new Date(date).toLocaleString('ru-RU', {
    hour: '2-digit',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    minute: '2-digit',
  })
}
