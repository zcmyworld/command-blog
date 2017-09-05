var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({
    pluginsName: ['article'],
    plugins: [{
      name: 'article',
      commands: ['edit', 'save', 'delete']
    }]
  });
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});