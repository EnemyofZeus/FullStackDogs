var mongoose = require('mongoose');
var ToyModel = require('./ToyModel.js');
var Owner = require('./ownerSchema')
var dogSchema = new mongoose.Schema({
  name: {type: String, required:true},
  breed: {type: String, required:true},
  badBreathe: {type: Boolean},
  owner: Owner,
  legs: {type: Number},
  favToys:[{type: mongoose.Schema.Types.ObjectId, ref: 'Toy'}]
});

module.exports = mongoose.model('Dog', dogSchema);
