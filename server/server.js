var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var connection = require('./database/connections.js');
var SeasonOne = require('./database/models/2006-2007.js');
var SeasonTwo = require('./database/models/2007-2008.js');
var SeasonThree = require('./database/models/2008-2009.js');
var SeasonFour = require('./database/models/2009-2010.js');
var obj;

app.use(express.static(path.join(__dirname,'../')));

//populates the schemas
// fs.readFile('../client/assets/combined-data/2009-2010.combined.json', 'utf8', function (err, data) {
//  if (err) throw err;
//   obj = JSON.parse(data);
//   console.log('obj1 length is ', obj1.length);
//   for(var i=0; i < obj.length; i++) {
//     SeasonFour.create(obj[i], function(err, doc) {
//       if(err) {
//         console.log('error in creating new doc');
//       } else {
//         console.log('doc created is ', doc);
//       }
//     })
//   }
// });


app.listen(PORT, function() {
  console.log('listening on port 3000...')
})