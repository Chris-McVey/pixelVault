const express = require('express');
const path = require('path');

require('../database/connect.js');

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use('/assets', express.static('assets'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server up and listneing on port ${port}`);
});
