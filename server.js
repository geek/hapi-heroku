var Hapi = require('hapi');

var port = process.env.PORT || 5000;
var server = new Hapi.Server(parseInt(port));

server.addRoute({ method: 'GET', path: '/{param?}', handler: welcome });

function welcome (request) {

    request.reply('Welcome');
}

server.start(function () {

    console.log('Server started at ' + server.settings.uri);
});