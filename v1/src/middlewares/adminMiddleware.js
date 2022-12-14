const httpStatus = require("http-status");

const admin = (req, res, next) => {
  if (!req.user_id) {
    return res.status(httpStatus.NOT_FOUND).send({
      message: "Böyle bir kullanıcı bulunamadı!",
      statusCode: 404,
      success: false,
    });
  }
  if (!req.isAdmin) {
    return res.status(httpStatus.FORBIDDEN).send({
      message:
        "Bu işlemi yalnızca yönetici yetkisi olan kullanıcılar yapabilir.",
      statusCode: 403,
      success: false,
    });
  }
  next();
};

module.exports = admin;
