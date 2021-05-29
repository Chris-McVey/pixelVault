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
  startTime: String,
  endTime: String,
});

const Events = mongoose.model('Events', eventsSchema);

module.exports = { News, Events };
