var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/interactive-shotchart');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is connected');
})

module.exports = db;