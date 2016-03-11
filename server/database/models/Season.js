var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeasonSchema = new Schema({
    _id: String,
    games: [{type: Schema.Types.ObjectId, ref:'Games'}]
})

var Season = mongoose.model('Season', SeasonSchema);

module.exports = Season;