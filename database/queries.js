const crypto = require('crypto');
const { News, User } = require('./schemas.js');

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
// This function auths a user, and creates a new session token if they auth.
// If we can't find the user we call back with null result.
const authUser = (username, textPassword, cb) => {
  User.find({ username }, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      if (result.length === 0) {
        cb(null, false); // let the api know that there isn't a user.
      }
      // Peform password hashing on incoming plaintext.
      const { salt, password } = result[0];
      let hash = crypto.createHmac(
        'sha512',
        salt
      ); /** Hashing algorithm sha512 */
      hash.update(textPassword);
      const checkString = hash.digest('hex');
      // If our plaintext matches our hashed password, then we create a session token.
      // This token needs to be sent back to the user, and stored on their end.
      // It will be the key for our API for the session.
      // There is an issue here where we need to clear the token from the DB on session close.
      // Or expire the token somehow.
      if (checkString === password) {
        // Assign a session ID to the user and send back the session ID.
        const sessionToken = crypto.randomBytes(Math.ceil(32)).toString('hex');

        const expiration = new Date(Date.now());
        expiration.setHours(expiration.getHours() + 24);

        // update the user to a new session_id.
        User.findOneAndUpdate({ id: result.id, expiration }, { sessionToken })
          .then(() => {
            cb(null, sessionToken);
          })
          .catch((e) => cb(e, null));
      } else {
        // If the password is invalid, we need to let the api know.
        cb(new Error('Invalid Token'), null);
      }
    }
  });
};

//addUser('test', 'someuser');
//authUser('test', 'someuser');
module.exports = {
  addNews,
  getNews,
  authUser,
};
