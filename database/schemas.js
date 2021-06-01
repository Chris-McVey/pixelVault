const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  text: String,
});

const News = mongoose.model('News', newsSchema);

const eventsSchema = mongoose.Schema({
  title: String,
  date: Date,
  text: String,
  startTime: String, // Should probably use ISOTime
  endTime: String,
});

const Events = mongoose.model('Events', eventsSchema);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  sessionToken: String,
  salt: String,
});

const User = mongoose.model('User', userSchema);

module.exports = { News, Events, User };
