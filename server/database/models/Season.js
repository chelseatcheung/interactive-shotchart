var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeasonSchema = new Schema({
    _id: String,
    games: [{
        events: [{
        }]
    }]
})

var Season = mongoose.model('Season', SeasonSchema);

module.exports = Season;