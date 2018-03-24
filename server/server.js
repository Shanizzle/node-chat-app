const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log(`Started up ${port}`);
});


module.exports.app = app;