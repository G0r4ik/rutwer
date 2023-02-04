export default async function errorHandler(err, req, res, next) {
  const error = {
    code: err.status || 500,
    message: err.message || 'Internal Server Error',
    errors: err.errors || [],
  }
  console.log(error)
  res.status(error.code).json(error)
}
