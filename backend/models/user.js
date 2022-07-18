const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Имя Именович',
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'О себе',
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return /^(https?:\/\/(www\.)?([a-zA-z0-9-]{1}[a-zA-z0-9-]*\.?)*\.{1}([a-zA-z0-9]){2,8}(\/?([a-zA-z0-9-])*\/?)*\/?([-._~:?#[]@!\$&'\(\)\*\+,;=])*)/.test(v);
      },
    },
    default: 'https://npk.asou-mo.ru/images/2021/09/16/chu5ugbwgaaslnx.jpg',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (mail) => validator.isEmail(mail),
    // console.log(validator.isEmail(data.email))
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);
