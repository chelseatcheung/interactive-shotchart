var Event = require('../database/models/Events.js');

module.exports = {
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
      },
      ], function(err, results) {
      if(err){
        throw err;
      } else {
        results.map(function(index) {
          var originalScore = index['score'].toString();
          index['score'] = originalScore.substring(0, 4)
        })
        // next();
        res.status(200).send(results)
      }
      });
    },
  highestRebounds: function(req, res) {
    Event.aggregate([
      {$match:{
        etype: "rebound"
      }},
      {$group:{
        _id:"$player",
        total_rebounds: {$push: "$etype"},
        games:{$addToSet:"$game"},
        teams: {$addToSet: "$team"}
      }},
      {$project: {
        _id:true,
        score: {$divide:[{$size:"$total_rebounds"},{$size:"$games"}]},
        teams:true
      }},
      {$sort: {
        score: -1
      }},
      {$limit:6
      }
      ], function(err, results) {
        if(err) {throw err;} else {
          // console.log('results are ', results)
        results.map(function(index) {
          var originalScore = index['score'].toString();
          index['score'] = originalScore.substring(0, 4)
        })
          res.status(200).send(results)
        }
      })
  },
  highestAssists: function(req, res) {
    Event.aggregate([
      {$match:{
        assist: {$exists:true, $nin :[null]}
      }},
      {$group:{
        _id:"$assist",
        total_assists: {$push: "$assist"},
        games:{$addToSet:"$game"},
        teams: {$addToSet: "$team"}
      }},
      {$project: {
        _id:true,
        score: {$divide:[{$size:"$total_assists"},{$size:"$games"}]},
        teams:true
      }},
      {$sort: {
        score: -1
      }},
      {$limit:6
      }
      ], function(err, results) {
        if(err) {throw err;} else {
        results.map(function(index) {
          var originalScore = index['score'].toString();
          index['score'] = originalScore.substring(0, 4)
        })
          res.status(200).send(results);
        }
      })
  },
  highestSteals: function(req, res) {
    Event.aggregate([
    {$match:{
      steal: {$exists:true}
    }},
    {$group:{
      _id:"$steal",
      total_steals: {$push: "$steal"},
      games:{$addToSet:"$game"},
      teams: {$addToSet: "$team"}
    }},
    {$project: {
      _id:true,
      score: {$divide:[{$size:"$total_steals"},{$size:"$games"}]},
      teams:true
    }},
    {$sort: {
      score: -1
    }},
    {$limit:6
    }
    ], function(err, results) {
      if(err) {throw err;} else {
      results.map(function(index) {
        var originalScore = index['score'].toString();
        index['score'] = originalScore.substring(0, 4)
      })
        res.status(200).send(results);
      }
    })
  },
  fieldGoals: function(req, res) {
    Event.aggregate([
    {$match:{
      "etype":"shot"
    }},
    {$group: {
      _id:"$player",
      shots:{$push:"$result"},
      teams: {$addToSet:"$team"},
    }},
    {$project: {
      _id:true,
      score:{$multiply:[{$divide:[{$size:{$filter:{
        input:"$shots",
        as:"shot",
        cond:{$eq:["$$shot","made"]}
      }}}, {$size:"$shots"}]}, 100]},
      teams: true
    }},
    {$sort: {
      score: -1
    }},
    {$limit:6
    }
    ], function(err, results) {
      if(err) {
        throw err; 
      } else {
        results.map(function(index) {
          var originalScore = index['score'].toString();
          index['score'] = originalScore.substring(0, 4)
        })
        res.status(200).send(results);
      }
    })
  },
  freeThrows: function(req, res) {
    Event.aggregate([
    {$match:{
      "etype":"free throw"
    }},
    {$group: {
      _id:"$player",
      shots: {$sum:"$num"},
      attempts: {$sum:"$outof"},
      teams: {$addToSet:"$team"},
    }},
    {$project: {
      _id:true,
      score:{$multiply:[{$divide:["$shots","$attempts"]}, 100]},
      teams: true
    }},
    {$sort: {
      score: -1
    }},
    {$limit:6
    }
    ], function(err, results) {
      if(err) {
        throw err; 
      } else {
        results.map(function(index) {
          var originalScore = index['score'].toString();
          index['score'] = originalScore.substring(0, 4)
        })
        res.status(200).send(results);
      }
    })
  },
  threePoints: function(req, res) {
    Event.aggregate([
      {$match:{
        "type":"3pt"
      }},
      {$group: {
        _id:"$player",
        shots:{$push:"$result"},
        teams: {$addToSet:"$team"},
      }},
      {$project: {
      _id:true,
      score:{$multiply:[{$divide:[{$size:{$filter:{
        input:"$shots",
        as:"shot",
        cond:{$eq:["$$shot","made"]}
      }}}, {$size:"$shots"}]}, 100]},
      teams: true
      }},
      {$sort: {
        score: -1
      }},
      {$limit:6
      }
      ], function(err, results) {
        if(err) {
          throw err; 
        } else {
          results.map(function(index) {
            var originalScore = index['score'].toString();
            index['score'] = originalScore.substring(0, 4)
          })
          res.status(200).send(results);
        }
      })
  },
  highestBlocks: function(res, res) {
    Event.aggregate([
    {$match: {
      block: {$exists:true, $nin :[null]}
    }},
    {$group:{
      _id:"$block",
      total_blocks: {$push:"$block"},
      games:{$addToSet:"$game"},
      teams:{$addToSet:"$team"}
    }},
    {$project: {
      _id:true,
      score: {$divide:[{$size:"$total_blocks"},{$size:"$games"}]},
      teams:true
    }},
    {$sort: {
      score: -1
    }},
    {$limit:6
    }
    ], function(err, results) {
      if(err) {throw err;} else {
      results.map(function(index) {
        var originalScore = index['score'].toString();
        index['score'] = originalScore.substring(0, 4)
      })
        res.status(200).send(results);
      }
    })
  },
  highestAssistPoints: function(req, res) {
    Event.aggregate([
    {$match: {
      $or:[
      {assist:{$exists:true, $nin:[null]}},
      {"points":{$gt:0}}
      ]
    }},
    {$group:{
      _id:"$assist",
      total_points: {$sum:"$points"},
      games:{$addToSet:"$game"},
      teams: {$addToSet:"$team"}
    }},
    {$project:{
      _id:true,
      score: {$divide:["$total_points",{$size:"$games"}]},
      teams:true
    }},
    {$sort: {
      score: -1
    }},
    {$limit:6
    }
    ], function(err, results) {
      if(err) {throw err;} else {
      results.map(function(index) {
        var originalScore = index['score'].toString();
        index['score'] = originalScore.substring(0, 4)
      })
        res.status(200).send(results);
      }
    })
  }


}



