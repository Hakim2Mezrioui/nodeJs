const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization
      ? req.headers.authorization.split(" ")
      : [];
    const token = authorization.length > 1 ? authorization[1] : null;

    if (!token) {
      res.code = 400;
      throw new Error("Token is required");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (!payload) {
      res.code = 401;
      throw new Error("Unauthorized");
    }

    req.user = {
      _id: payload._id,
      name: payload.name,
      email: payload.email,
      role: payload.role,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isAuth;
