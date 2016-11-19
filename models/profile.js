/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/band-together');
var Profile = require('./models/profile');

var Profile = new Schema({
  name: String,
  age: Number,
  area: String,
  instruments: String
  experience: Number
  style: String,
  needs: String,
  updatedAt: Date
});

module.exports = mongoose.model('Profile', Profile);
