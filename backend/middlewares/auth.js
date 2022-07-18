const jwt = require('jsonwebtoken');
const AuthorisationErr = require('../errors/AuthorisationErr_401');

module.exports = (req, res, next) => {
  const { JWT_SECRET = 'some-secret-key' } = process.env;
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw (new AuthorisationErr('Необходима авторизация'));
  }
  const token = authorization.replace(/^\S+/, '').trim();

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new AuthorisationErr('Необходима авторизация'));
  }
  req.user = payload;
  next();
};
