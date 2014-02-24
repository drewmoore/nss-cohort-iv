'use strict';

var dbname = 'song-list';
var port = process.env.PORT || 4000;

var d = require('./lib/request-debug');
var connectMongo = require('./lib/mongodb-connection-pool').initialize(dbname);

var express = require('express');
var home = require('./routes/home');
var app = express();

var songs = require('./routes/songs');

/* --- pipeline begins */
app.use(connectMongo);
app.use(express.logger(':remote-addr -> :method :url [:status]'));
app.use(require('./lib/cors'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', d, home.index);
app.get('/index', d, songs.index);
app.get('/songs/search', d, songs.findByName);

app.post('/songs', d, songs.create);

app.put('/songs/:songId', d, songs.edit);

app.delete('/songs/:songId', d, songs.remove);
/* --- pipeline ends   */

var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Database: ' + dbname);
});

