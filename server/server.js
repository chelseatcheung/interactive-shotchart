var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var connection = require('./database/connections.js');
var Event = require('./database/models/Events.js');
app.use(express.static(path.join(__dirname,'../')));
var arrayOfObj;
var controllers = ('./controllers/controllers.js')

app.use('/highestpoints', function(req, res) {
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
      res.send(results)
    }
  })
})

app.use('/highestrebounds', function(req, res) {
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
        res.send(results)
      }
    })
})

app.use('/highestassists', function(req, res) {
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
        // console.log('results are ', results)
        res.send(results)
      }
    })
})


app.use('/higheststeals', function(req, res) {
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
        // console.log('results are ', results)
        res.send(results)
      }
    })
})

app.use('/fieldgoals', function(req, res) {
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
        res.send(results)
        // console.log('results are ', results)

      }
    })
})

// total_freethrows:{$sum:"$num"},
app.use('/freethrows', function(req, res) {
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
        res.send(results)
        // console.log('results are ', results)

      }
    })
})

app.use('/threepoints', function(req, res) {
  Event.aggregate([
    {$match:{
      "type":"3pt"
    }},
    {$group: {
      _id:"$player",
      shots:{$push:"$result"},
      // shots:{$push:"$type"},
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
        res.send(results)
        // console.log('results are ', results)

      }
    })
})

app.use('/highestblocks', function(req, res) {
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
      // console.log('results are ', results)
        res.send(results)
      }
    })
})

// app.use('/highestassists', function(req, res) {
//   Event.aggregate([
//     {$match:{
//       assist: {$exists:true, $nin :[null]}
//     }},
//     {$group:{
//       _id:"$assist",
//       total_assists: {$push: "$assist"},
//       games:{$addToSet:"$game"},
//       teams: {$addToSet: "$team"}
//     }},
//     {$project: {
//       _id:true,
//       score: {$divide:[{$size:"$total_assists"},{$size:"$games"}]},
//       teams:true
//     }},
//     {$sort: {
//       score: -1
//     }},
//     {$limit:6
//     }
//     ], function(err, results) {
//       if(err) {throw err;} else {
//       results.map(function(index) {
//         var originalScore = index['score'].toString();
//         index['score'] = originalScore.substring(0, 4)
//       })
//         // console.log('results are ', results)
//         res.send(results)
//       }
//     })
// })



//function that creates the docs
//had to add them in increments or else server would crash, hence the specific number in the for loop
function createDocs () {
  fs.readdir('../client/assets/parsed-data/2009-2010.regular_season', function(err,files){
   var season = "SeasonFour";
   var game;
   // loop through the files in folder
   for(var i=201;i <= 251; i++) {
     game = files[i].substring(9,15);
     //read through the content of the files (an array of objects)
     (function(position,contest){
       fs.readFile('../client/assets/parsed-data/2009-2010.regular_season/'+files[position], 'utf8', function (err, data) {
          if(err) {
           throw err;
          } else {
           arrayOfObj = JSON.parse(data);
           for(var j=0; j < arrayOfObj.length; j++) {
             createNewEvent(arrayOfObj[j], season, contest);
           }
          }
       })
     })(i,game);
   }
  })
}

//helper function that creates new instance of schema
var createNewEvent = function(obj,seas,gam) {
  var creation = new Event(obj);
  creation.game = gam;
  creation.season= seas;
  creation.save(function(err){
    if(err){
      console.log('save error: ',err);
    }else{
      console.log('saved!');
    }
  })
}

//helper function to check that the accurate info is in the database
var findFromDB = function (season) {
  Event.find({game:'PHIDAL'},function(err,result){
    if(err) {
     console.log('error: ', err)
   } else {
    console.log('results is', result);
   };
  }).count({},function(err,count){console.log('count is ',count)});
};




//helper function that removes a schema/database
var removeSeason = function () {
  Event.remove({},function(err){
    if(err){
    console.log('error: ',err);
    } else {
      console.log('all deleted');
    }
  })
};



app.listen(PORT, function() {
  console.log('listening on port 3000...')
})