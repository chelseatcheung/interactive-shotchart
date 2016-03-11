var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GamesSchema = new Schema({
  game: String,
  season: String,
  events: []
})

var Games = mongoose.model('Games', GamesSchema);

module.exports = Games;