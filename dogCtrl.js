var dogs = require('./dogs.js');

module.exports = {
  create:function(req, res, next){
    dogs.push(req.body);
    res.send(dogs);},
  read:function(req, res, next){
    res.send(dogs);
  },
  update:function(req, res, next){
    for(var i = 0; i < dogs.length; i++){
      if(req.params.id==dogs[i].name){
        dogs[i] = req.body;
      }
    }
    res.send(dogs);
  },
  delete: function(req,res,next){
    for(var i = 0; i < dogs.length; i++){
      if(req.params.id==dogs[i].name){
        dogs.splice(i, 1);
      }
    }
    res.send(dogs);
  }
}
