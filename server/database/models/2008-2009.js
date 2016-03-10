var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeasonThreeSchema = new Schema({
    games: [{
            events: [{
                        y: Number,
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
                        period: Number,
                        time: String,
                        team: String,
                        etype: String,
                        assist: String,
                        away: String,
                        block: String,
                        entered: String,
                        home: String,
                        left: String,
                        num: Number,
                        opponent: String,
                        outof: Number,
                        player: String,
                        points: Number,
                        possession: String,
                        reason: String,
                        result: String,
                        steal: String,
                        type: String,
                        x: Number
            }]
        }]
})

var SeasonThree = mongoose.model('SeasonThree', SeasonThreeSchema);

module.exports = SeasonThree;