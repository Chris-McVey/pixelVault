require('../database/connect.js');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const {
  addNews,
  getNews,
  authUser,
  isUserAuthed,
  deleteNews,
} = require('../database/queries.js');
const { Db } = require('mongodb');

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(bodyParser.json()); // Could use express.json.

const parseCookie = (rawCookies) => {
  const cookies = rawCookies.split('; ');
  let passedCookie;
  cookies.forEach((cookie) => {
    if (cookie.includes('token')) {
      passedCookie = cookie.split('=')[1];
    }
  });
  return passedCookie;
};

app.use('/admin/private/*', (req, res) => {
  const adminIndex = path.join(__dirname, '../private/index.html');
  const targetFile = path.join(
    __dirname,
    `../private/${req.baseUrl.split('/')[3]}`
  );

  // check to see if the cookie is proper for the user.
  const passedCookie = parseCookie(req.headers.cookie);
  if (!passedCookie) {
    res.send('invalid access');
    return;
  }
  isUserAuthed(passedCookie, (e, r) => {
    if (!r) {
      res.clearCookie('token');

      res.send('invalid access');
    } else {
      res.sendFile(targetFile);
    }
  });
});

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
  const passedCookie = parseCookie(req.headers.cookie);
  if (!passedCookie) {
    res.status(401).send('invalid access');
    return;
  }
  isUserAuthed(passedCookie, (e, r) => {
    if (!r) {
      res.clearCookie('token');
      res.status(401).send('invalid access');
    } else {
      addNews(newsContent, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).send(result);
        }
      });
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

app.delete('/api/news:id', (req, res) => {
  const { id } = req.params;
  const passedCookie = parseCookie(req.headers.cookie);
  if (!passedCookie) {
    res.status(401).send('invalid access');
    return;
  }
  isUserAuthed(passedCookie, (e, r) => {
    if (!r) {
      res.clearCookie('token');
      res.status(401).send('invalid access');
    } else {
      deleteNews(id, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      });
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
