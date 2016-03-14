var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var connection = require('./database/connections.js');
var Event = require('./database/models/Events.js');
app.use(express.static(path.join(__dirname,'../')));
var arrayOfObj;


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
  Event.find({player: 'Stephen Curry'},function(err,result){
    if(err) {
     console.log('error: ', err)
   } else {
    console.log('results is', result);
   };
  }).count({},function(err,count){console.log('count is ',count)});
}();




//function that removes a schema/database
var removeSeason = function () {
  Event.remove({},function(err){
    if(err){
    console.log('error: ',err);
    } else {
      console.log('all deleted');
    }
  })
};


//creates the events
// fs.readdir('../client/assets/parsed-data/2009-2010.regular_season', function(err,files){
//  var season = "SeasonFour";
//  var game;
//  // console.log('files are ', files.length) 1215
//  //loop through the files in folder
//  for(var i=1001;i < files.length; i++) {
//    game = files[i].substring(9,15);
//    //read through the content of the files (an array of objects)
//    (function(position,contest){

//      fs.readFile('../client/assets/parsed-data/2009-2010.regular_season/'+files[position], 'utf8', function (err, data) {
//         if(err) {
//          throw err;
//         } else {
//          arrayOfObj = JSON.parse(data);
//          for(var j=0; j < arrayOfObj.length; j++) {
//            createNewEvent(arrayOfObj[j], season, contest);
//          }
//         }
//      })
//    })(i,game);
//  }
// })



app.listen(PORT, function() {
  console.log('listening on port 3000...')
})