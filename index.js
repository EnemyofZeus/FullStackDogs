var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
//var session = require('express-session');


var dogCtrl = require("./dogCtrl.js");
//var config = require('./config.js');
var userCtrl = require('./userCtrl.js');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//app.use(session(config));
app.use(express.static(__dirname + '/public'));

app.post('/login', userCtrl);

app.get('/dogs', dogCtrl.read);

app.post('/dogs', dogCtrl.create );

app.put('/dogs/:id', dogCtrl.update);

app.delete('/dogs/:id', dogCtrl.delete);

app.listen(8080, function(){
  console.log("A spaceman. That's what they say I am");
});
