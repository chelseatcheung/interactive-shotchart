var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var connection = require('./database/connections.js');
var Event = require('./database/models/Events.js');
var query = require('./controllers/controllers.js');
var arrayOfObj;


app.use(express.static(path.join(__dirname,'../')));



//function that creates the docs
//had to add them in increments or else server would crash, hence the specific number in the for loop


// (function createDocs() {
//   fs.readdir(path.join(__dirname,'../client/assets/parsed-data/2009-2010.regular_season'), function(err,files){
//    var season = "SeasonFour";
//    var game;
//    // loop through the files in folder
//    for(var i=39;i <= 59; i++) {
//      game = files[i].substring(9,15);
//      // read through the content of the files (an array of objects)
//      (function(position,contest){
//        fs.readFile(path.join(__dirname,'../client/assets/parsed-data/2009-2010.regular_season/'+files[position]), 'utf8', function (err, data) {
//           if(err) {
//            throw err;
//           } else {
//            arrayOfObj = JSON.parse(data);
//            for(var j=0; j < arrayOfObj.length; j++) {
//              createNewEvent(arrayOfObj[j], season, contest);
//            }
//           }
//        })
//      })(i,game);
//    }
//   })
// })();

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
  Event.find({},function(err,result){
    if(err) {
     console.log('error: ', err)
   } else {
    console.log('results is', result);
   };
  }).count({},function(err,count){console.log('count is ',count)});
}();




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

module.exports = app;
require('./routes/routes.js');


app.listen(PORT, function() {
  console.log('listening on port '+ PORT );
})