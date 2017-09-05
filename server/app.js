var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({
    plugins: [{
      name: 'article',
      commands: ['edit', 'save', 'delete']
    }],
    routes: [
      {
        path: '/',
        component: 'article/MyContent',
      },
      {
        path: '/article/:id/edit',
        component: 'article/MyPage'
      },
      {
        path: '/article/:id',
        component: 'article/MyPage'
      },
      {
        path: '/tool',
        component: 'MyTool'
      },
      {
        path: '/page',
        component: 'article/MyPage'
      },
      {
        path: '/admin',
        component: 'admin/MyAdmin',
      }
    ]
  });
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});