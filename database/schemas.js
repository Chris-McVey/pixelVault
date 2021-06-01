const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  text: String,
});

const News = mongoose.model('News', newsSchema);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  sessionToken: String,
  salt: String,
});

const User = mongoose.model('User', userSchema);

module.exports = { News, User };
