var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var dogs = require('./dogs.js');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/dogs', function(req, res, next){
  res.send(dogs);
});

app.post('/dogs', function(req, res, next){
  dogs.push(req.body);
  res.send(dogs);
});

app.put('/dogs/:id', function(req, res, next){
  for(var i = 0; i < dogs.length; i++){
    if(req.params.id==dogs[i].name){
      dogs[i] = req.body;
    }
  }
  res.send(dogs);
});

app.delete('/dogs/:id', function(req,res,next){
  for(var i = 0; i < dogs.length; i++){
    if(req.params.id==dogs[i].name){
      dogs.splice(i, 1);
    }
  }
  res.send(dogs);
});

app.listen(8080, function(){
  console.log("A spaceman. That's what they say I am");
});
