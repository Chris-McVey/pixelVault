require('../database/connect.js');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const {
  addNews, getNews, addEvent, getEvents
} = require('../database/queries.js');

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(bodyParser.json());

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
