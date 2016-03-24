var app = require('../server.js');
var query = require('../controllers/controllers.js');

app.get('/highestpoints', query.highestPoints)
app.get('/highestrebounds', query.highestRebounds)
app.get('/highestassists', query.highestAssists)
app.get('/higheststeals', query.highestSteals)
app.get('/fieldgoals', query.fieldGoals)
app.get('/freethrows', query.freeThrows)
app.get('/threepoints', query.threePoints)
app.get('/highestblocks', query.highestBlocks)
app.get('/highestassistpoints', query.highestAssistPoints)

module.exports = app;