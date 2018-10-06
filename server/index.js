const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require("./router");
// const db = require('../database/index.js');
const PORT = 4000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use('/', router);

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});
