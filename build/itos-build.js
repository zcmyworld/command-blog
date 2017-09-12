require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')


exports.webpackBuild = function (ws, cb) {
  ws.send('Webpack start ..');
  rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) {
      ws.send('Webpack has a problem. Please check the log to fix it');
      cb(err);
      return;
    }
    webpack(webpackConfig, function (err, stats) {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
          ws.send('Webpack has a problem. Please check the log to fix it');
          cb(err.details)
        }
        return;
      }
      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.log(info.errors)
        ws.send('Webpack has a problem. Please check the log to fix it');
        cb(info.errors);
        return;
      }

      if (stats.hasWarnings()) {
        console.log(info.hasWarnings)
        ws.send('Webpack has a problem. Please check the log to fix it');
        cb(info.warnings);
        return;
      }

      ws.send('Webpack build success ..');
      cb();
    })
  })
}

