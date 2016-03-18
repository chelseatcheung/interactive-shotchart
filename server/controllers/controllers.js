var Event = require('./database/models/Events.js');

module.exports = {
  testing: 'hi',
  highestPoints: function(req,res){

    Event.aggregate([
    {$match:{
      $or:[
      {"num":{$gt:0}}, 
      {"points":{$gt:0}}
      ]
    }},
    {$group:{
      _id: "$player", 
      total_freethrows:{$sum:"$num"},
      total_shots:{$sum:"$points"},
      games:{$addToSet:"$game"},
      teams: {$addToSet:"$team"}
    }}, 
    {$project: {
      _id:true,
      score: {$divide:[{$add:["$total_freethrows", "$total_shots"]}, {$size:"$games"}]},
      teams: true
    }},
    {$sort:{
      score: -1,
    }},
    {$limit:5
    }
    ], function(err, results) {
      if(err){
        throw err;
      } else {
        // console.log('results are, ', results)
        res.send(results)
      }
    })

  }


  }
