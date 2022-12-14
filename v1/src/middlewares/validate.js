const validate = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    next(error);
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
