var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GamesSchema = new Schema({
    _id: String,
    game: String,
    season: String,
    events: [{type: Schema.Types.ObjectId, ref:'Events'}]
})

var Games = mongoose.model('Games', GamesSchema);

module.exports = Games;