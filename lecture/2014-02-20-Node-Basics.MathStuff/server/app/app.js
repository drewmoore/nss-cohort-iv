'use strict';

var dbname = 'database-name';
var port = process.env.PORT || 4000;

var d = require('./lib/request-debug');
var connectMongo = require('./lib/mongodb-connection-pool').initialize(dbname);

var express = require('express');
var home = require('./routes/home');
var app = express();

var math = require('./routes/math');
var dogs = require('./routes/dogs');
var people = require('./routes/people');

/* --- pipeline begins */
app.use(connectMongo);
app.use(express.logger(':remote-addr -> :method :url [:status]'));
app.use(require('./lib/cors'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', d, home.index);
app.get('/hello', d, math.greeting);
app.get('/add/:x/:y', d, math.add);
app.get('/volume/:x/:y/:z', d, math.volume);
app.get('/min/:a/:b/:c/:d', d, math.min);
app.get('/max/:a/:b/:c/:d', d, math.max);
app.get('/sum-array/:x/:y', d, math.sumArray);
app.get('/welcome', d, math.welcome);
app.get('/create-array/:start/:stop/:step', d, math.createArray);
app.get('/find', d, people.find);

app.post('/dogs', d, dogs.create);
app.post('/people', d, people.create);

app.put('/update/:name', d, people.update);

app.delete('/delete', d, people.delete);
/* --- pipeline ends   */

var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Database: ' + dbname);
});

