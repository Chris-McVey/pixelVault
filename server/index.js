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

app.use('/admin/admin', (req, res) => {
  const adminIndex = path.join(__dirname, '../private/index.html');
  // check to see if the cookie is proper for the user.
  const cookies = req.headers.cookie.split('; ');
  let passedCookie;
  cookies.forEach((cookie) => {
    if (cookie.includes('token')) {
      passedCookie = cookie.split('=')[1];
    }
  });
  if (!passedCookie) {
    res.send('invalid access');
    return;
  }
  isUserAuthed(passedCookie, (e, r) => {
    if (!r) {
      res.send('invalid access');
    } else {
      res.send(express.static('private'));
    }
  });
});

// app.get('/admin/admin', (req, res) => {
//   const adminIndex = path.join(__dirname, '../private/index.html');
//   // check to see if the cookie is proper for the user.
//   const cookies = req.headers.cookie.split('; ');
//   let passedCookie;
//   cookies.forEach((cookie) => {
//     if (cookie.includes('token')) {
//       passedCookie = cookie.split('=')[1];
//     }
//   });
//   if (!passedCookie) {
//     res.send('invalid access');
//     return;
//   }
//   isUserAuthed(passedCookie, (e, r) => {
//     if (!r) {
//       res.send('invalid access');
//     } else {
//     }
//   });
// });

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

app.delete('/api/news:id', (req, res) => {
  const { id } = req.params;
  deleteNews(id, (err, result) => {
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
