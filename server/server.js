var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var connection = require('./database/connections.js');
var Event = require('./database/models/Events.js');
var Season = require('./database/models/Season.js');
var arrayOfObj;
app.use(express.static(path.join(__dirname,'../')));


//function that creates new instance of schema
var createNewEvent = function(obj,seas,gam) {
  // console.log('in createNewEvent'); 
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

//fucntion to check that the accurate info is in the database
var findFromDB = function (season) {
  Event.find({},function(err,result){
    if(err) {
     console.log('error: ', err)
   } else {
    console.log('result is ', result);
   };
  }).count({},function(err,count){console.log('count is ',count)});
};




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


// populates the schemas
// look through 2006-2007 folder
fs.readdir('../client/assets/parsed-data/2006-2007.regular_season',function(err,files){
  var season = "SeasonOne";
  var game;
  //loop through the files in folder
  for(var i=0;i < files.length; i++) {
    game = files[i].substring(9,15)
    //read through the content of the files (an array of objects)
    fs.readFile('../client/assets/parsed-data/2006-2007.regular_season/'+files[i], 'utf8', function (err, data) {
       if(err) {
        throw err;
       } else {
        arrayOfObj = JSON.parse(data);
        for(var i=0; i < arrayOfObj.length; i++) {
          createNewEvent(arrayOfObj[i], season, game);
        }
       }
    })
  }
})



app.listen(PORT, function() {
  console.log('listening on port 3000...')
})