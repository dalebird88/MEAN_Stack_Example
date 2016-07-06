// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// APP
var app = express();
app.use(bodyParser());
app.use(cors());
app.use(express.static(__dirname + './../public'));

// CONTROLLERS
var messageCtrl = require('./controllers/messageController.js');
var userCtrl = require('./controllers/userController.js');

// MIDDLEWARE

// MESSAGE ENDPOINTS
app.get('/message', messageCtrl.read);
// app.post('/message', messageCtrl.read);
app.post('/message', messageCtrl.create);
app.put('/message/:id', messageCtrl.update);
app.delete('/message/:id', messageCtrl.delete);

// USER ENDPOINTS
app.get('/user', userCtrl.read);
app.post('/user', userCtrl.create);
app.put('/user/:id', userCtrl.update);
app.delete('user/:id', userCtrl.delete);




// VARIABLES
var port = 3000;
var mongoURI = 'mongodb://localhost:27017/messager';

// DATABASE CONNECTION
mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to mongo at: ', mongoURI);
});

// LISTEN
app.listen(port, function() {
  console.log('Connected on port', port);
});
