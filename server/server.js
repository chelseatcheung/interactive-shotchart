var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var connection = require('./database/connections.js');

app.use(express.static(path.join(__dirname,'../')));

fs.readdir('../client/assets/game-data/parsed-data/2006-2007.regular_season',function(err,files){
  if(err){
    console.log('error: ', err);
  } else if(!err){
    console.log('files are: ', JSON.stringify(files[0]));
  }
})


// var my_data = require('../client/assets/game-data/parsed-data/2006-2007.regular_season/20061031.CHIMIA.json');
// console.log('my_data :', my_data);

app.listen(PORT, function() {
  console.log('listening on port 3000...')
})