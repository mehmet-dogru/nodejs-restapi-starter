const errorHandling = (err, req, res, next) => {
  if (err.code === 11000) {
    return res.json({
      message: "Bu kullanıcı zaten var!",
      statusCode: 403,
      success: false,
    });
  }

  if (err.code === 66) {
    return res.json({
      message: "ID değişirilemez!",
      statusCode: 400,
      success: false,
    });
  }

  res.json({
    statusCode: err.status || 500,
    message: err.message,
    success: false,
  });
};

module.exports = errorHandling;
