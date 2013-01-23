var Hapi = require('hapi');

var server = new Hapi.Server();

server.addRoute({ method: 'GET', path: '/{param?}', handler: welcome });

function welcome (request) {

    request.reply('Welcome');
}

server.settings.port = process.env.PORT;
server.settings.host = null;
server.start(function () {

    console.log('Server started at ' + server.settings.uri);
});