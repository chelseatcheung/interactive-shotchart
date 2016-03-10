var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var connection = require('./database/connections.js');
var Season = require('./database/models/Season.js');
var arrayOfObj;
app.use(express.static(path.join(__dirname,'../')));


//function that creates new instance of schema
var createNewSeason = function() {
  Season.create({_id:"SeasonFour"}, function(err,doc){
    if(err) { 
      console.log('error: ', err)
    } else { 
      console.log('doc created is: ',doc)
    };
  });
}

//fucntion that finds needed data from a certain schema
var findFromDB = function () {
  Season.find({_id:"SeasonOne"},function(err,result){
    if(err) {
     console.log('error: ', err)
   } else {
    console.log('result is ', result);
   };
  });
}

//function that removes a schema/database
var removeSeason = function () {
  Season.remove({},function(err){
    if(err){
    console.log('error: ',err);
    } else {
      console.log('all deleted');
    }
  })
}

//iterate through games and push into season.games
//push array of events into seanson.games[i].events


// populates the schemas
// fs.readdir('../client/assets/parsed-data/2006-2007.regular_season',function(err,files){

//   for(var i = 0; i < files.length; i++){
//     Season.update({_id:"SeasonOne"},{$push:{"games":{}}})


    // fs.readFile('../client/assets/parsed-data/2006-2007.regular_season/'+files[i], 'utf8', function (err, data) {
    //  if (err) throw err;
    //   arrayOfObj = JSON.parse(data);
    //   Season.gamesevents = arrayOfObj;
      // for(var i=0; i < arrayObobj.length; i++) {
      //   SeasonOne.
      // }
      // for(var i=0; i < obj.length; i++) {
      //   SeasonFour.create(obj[i], function(err, doc) {
      //     if(err) {
      //       console.log('error in creating new doc');
      //     } else {
      //       console.log('doc created is ', doc);
      //     }
      //   })
      // }
    // });

  // }
  // console.log('done!');
  // })



app.listen(PORT, function() {
  console.log('listening on port 3000...')
})