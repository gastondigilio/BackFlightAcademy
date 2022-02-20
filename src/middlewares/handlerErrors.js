// Errores
const handlerErrors = function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    error: {
      message: err.message,
      path: err.path
    }
  })
}

module.exports = handlerErrors
