const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = {};

  console.log(errors);
  if (Object.keys(errors.errors).length === 0) {
    next();
  } else {
    errors.errors.map((error) => {
      mappedErrors[error.path] = error.msg;
    });

    res.status(400).json(mappedErrors);
  }
};

module.exports = validate;
