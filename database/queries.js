const crypto = require('crypto');
const { News, Events, User } = require('./schemas.js');

const addNews = ({ title, date, text }, callback) => {
  const newNews = new News({
    title,
    date,
    text,
  });
  newNews
    .save()
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
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

const addUser = (username, password) => {
  // Create the password hash with salt.
  const salt = crypto
    .randomBytes(Math.ceil(32))
    .toString('hex'); /** convert to hexadecimal format */
  const hash = crypto.createHmac(
    'sha512',
    salt
  ); /** Hashing algorithm sha512 */
  hash.update(password);
  const storable = hash.digest('hex');
  const userObject = new User({
    username,
    salt,
    password: storable,
    session: null,
  });

  userObject
    .save()
    .then((data) => {
      // Do something.
    })
    .catch((e) => {
      console.log(e);
    });
};

const authUser = (username, textPassword, cb) => {
  User.find({ username }, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      if (result.length === 0) {
        cb(null, false); // let the api know that there isn't a user.
      }
      const { username, salt, password } = result[0];
      let hash = crypto.createHmac(
        'sha512',
        salt
      ); /** Hashing algorithm sha512 */
      hash.update(textPassword);
      const checkString = hash.digest('hex');
      if (checkString === password) {
        cb(null, true);
      }
    }
  });
};

const addEvent = () => {};

const getEvents = () => {};
//addUser('test', 'someuser');
//authUser('test', 'someuser');
module.exports = {
  addNews,
  getNews,
  addEvent,
  getEvents,
  authUser,
};
