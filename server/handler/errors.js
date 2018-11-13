const errorHandler = ((error, req, res, next) =>{
  return res.status(error.status || 500).json({
    error: {
      message: error.message || 'Oops server issue'
    }
  });
})

module.exports = errorHandler;
