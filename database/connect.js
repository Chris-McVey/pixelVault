require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.poovn.mongodb.net/fetcher?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the mongod succesfully!');
    }
  }
);
