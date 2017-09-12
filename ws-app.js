const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let itosBuild = require('./build/itos-build');

let fs = require('fs');

let pluginFile = './tmp/article.tar.gz';
let pluginDir = './tmp/article/';

let file = fs.createWriteStream(pluginFile);


var read = require('fs').createReadStream
var unpack = require('tar-pack').unpack

wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);

  ws.on('message', function incoming(message) {
    if (message == 'install') {
      ws.send('Installation start ..');

      ws.send('Downoloading plugin start ..');
      let request = http.get("http://127.0.0.1:3005/article.tar.gz", function (response) {
        response.pipe(file);
        file.on('finish', function () {
          ws.send('Downoloading plugin finish ..');
          ws.send('Unpack plugin source start ..');
          read(pluginFile).pipe(unpack(pluginDir, function (err) {
            if (err) {
              ws.send('Upack plugin source error ..');
              return;
            }
            ws.send('Adjusting file structure ..');
            var isDir = fs.existsSync('./src/plugins/article');
            if (isDir) {
              ws.send('Plugin exist ..');
              return;
            }
            fs.renameSync('./tmp/article', './src/plugins/article');
            itosBuild.webpackBuild(ws, function (err) {
              if (!err) {
                ws.send('Installation success!');
                return;
              }
              ws.send('Installation failure!');
            });
          }))
        })
      });
    }
  });
});

server.listen(8083, function listening() {
  console.log('Listening on %d', server.address().port);
});