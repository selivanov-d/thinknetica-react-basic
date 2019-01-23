const express = require('express');
const { resolve } = require('path');
const manifest = require('../../public/manifest');

const app = express();
const webpackAsset = key => manifest[key];

app.use(express.static(resolve(process.cwd(), 'public')));
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('index', { webpackAsset });
});

app.listen(8001);
