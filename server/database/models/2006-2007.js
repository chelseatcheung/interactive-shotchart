var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeasonOneSchema = new Schema({
    y: String,
    a1: String,
    a2: String,
    a3: String,
    a4: String,
    a5: String,
    h1: String,
    h2: String,
    h3: String,
    h4: String,
    h5: String,
    period: String,
    time: String,
    team: String,
    etype: String,
    assist: String,
    away: String,
    block: String,
    entered: String,
    home: String,
    left: String,
    num: String,
    opponent: String,
    outof: String,
    player: String,
    points: String,
    possession: String,
    reason: String,
    result: String,
    steal: String,
    type: String,
    x: String
})

var SeasonOne = mongoose.model('SeasonOne', SeasonOneSchema);

module.exports = SeasonOne;