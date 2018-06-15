const http = require('http')
const path = require('path')

console.log('STARTUP')

// Express and middlewares
const express = require('express')
const expressBodyParser = require('body-parser')
const packageInfo = require('./package.json')
const monoRepoTestCommon = require('@vue-monorepo-boilerplate/common')


console.log('Common package Info:' + JSON.stringify(monoRepoTestCommon.getInfo()));

var app = module.exports = express();
app.set('svcInfo', packageInfo);
app.set('port', process.env.PORT || 3200);

const uiPath = path.join(path.dirname(require.resolve('@vue-monorepo-boilerplate/ui/package.json')),'dist');
console.log('Resolved path to UI dist:' + uiPath);
app.use(express.static(uiPath));

app.use(expressBodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(expressBodyParser.json({limit: '10mb'}))

app.get('/info', function (req, res) {
  res.json({name: app.get('svcInfo').name, version: app.get('svcInfo').version})
})

// Setup server
var server = http.createServer(app)

// Start server
server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'))
    console.log('Service url: http://localhost:' + app.get('port'))
    console.log('Service name: ' + app.get('svcInfo').name + ', version: ' + app.get('svcInfo').version)
});


process.on('SIGTERM', function () {
  process.exit()
});

process.on('SIGINT', function () {
  process.exit()
});

process.on('uncaughtException', function (err) {
  process.exit();
});
