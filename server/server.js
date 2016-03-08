var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
// var Converter = require("csvtojson").Converter;
// var converter = new Converter({});

// converter.fromFile("../client/assets/2006-2007.regular_season/20061031.CHIMIA.csv", function(err, result) {
//   if(err) {
//     console.log('error in converting file');
//   } else {
//     console.log('result is ', result);
//   }
// })

// converter.on("end_parsed", function(jsonArray) {
//   console.log('jsoned data ', jsonArray);
// })

// require("fs").createReadStream("../client/assets/2006-2007.regular_season/20061031.CHIMIA.csv").pipe(converter);

app.use(express.static(path.join(__dirname,'../')));

app.listen(PORT, function() {
  console.log('listening on port 3000...')
})