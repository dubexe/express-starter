var express = require('express');
var app = express();

const PORT = process.env.PORT || 8080;

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(PORT, function () {
  console.log('Web server listening on port ' + PORT);
});
