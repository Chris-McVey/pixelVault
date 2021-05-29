const { News, Events } = require('./schemas.js');

const addNews = ({ title, date, text }, callback) => {
  const newNews = new News({
    title,
    date,
    text
  });
  newNews.save().then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err, null);
  });
};

const getNews = (callback) => {
  News.find({}, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const addEvent = () => {

};

const getEvents = () => {

};

module.exports = {
  addNews, getNews, addEvent, getEvents,
};
