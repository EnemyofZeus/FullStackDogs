var DogModel = require('./models/DogModel.js');

//mongoose methods - obj.save(callback), Model.find().exec(callback), Model.findByIdAndUpdate(id, data, callback), Model.findByIdAndRemove(id, data, callback)

module.exports = {
  create:function(req, res, next){

    var dog = new DogModel(req.body);
    dog.save(req.body, function(err, result){
      if(err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  },
  read:function(req, res, next){

    DogModel.find().populate('favToys').exec( function(err, result){
      if(err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  },
  update:function(req, res, next){
    DogModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  },
  delete: function(req,res,next){
      DogModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      } else {
        res.send("It's gone! It's all gone!");
      }
    })
  }
};
