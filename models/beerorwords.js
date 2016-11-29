var mongoose = require('mongoose');

var BeerSchema = new Schema({
  name: String
  alcohol: Number
});

module.exports = mongoose.model('Beers', BeerSchema);
