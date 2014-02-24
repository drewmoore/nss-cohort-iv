'use strict';

var express = require('express');
var home = require('./routes/home');
var app = express();
var exercises = require('./routes/exercises');
var index = require('./routes/index');

app.set('port', process.env.PORT || 4000);
app.use(express.logger(':remote-addr -> :method :url [:status]'));
app.use(require('./lib/cors'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', home.index);
app.get('/exercises', index.index);
app.get('/exercises/:name', index.queryName);
app.post('/exercises', exercises.create);

var server = require('http').createServer(app);
server.listen(app.get('port'), function(){
  console.log('Node server listening. Port: ' + app.get('port'));
});

