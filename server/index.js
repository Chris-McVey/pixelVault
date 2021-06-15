require('../database/connect.js');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const {
  addNews,
  getNews,
  authUser,
  isUserAuthed,
} = require('../database/queries.js');

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(bodyParser.json()); // Could use express.json.

// Auth code
app.post('/api/auth', (req, res) => {
  authUser(req.body.username, req.body.password, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/api/isauthd', (req, res) => {
  isUserAuthed(req.body.sessionToken, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/api/news', (req, res) => {
  const newsContent = req.body;
  addNews(newsContent, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});

app.get('/api/news', (req, res) => {
  getNews((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.use('/assets', express.static('assets'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server up and listneing on port ${port}`);
});
