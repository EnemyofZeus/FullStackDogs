var mongoose = require('mongoose');

var ownerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String},
  city: {type: String},
  state: {type: String},
  car: {type: String},
  givesTreats: {type: Boolean}
});

module.exports = ('Owner', ownerSchema);
