var Hapi = require('hapi');

var server = new Hapi.Server(+process.env.PORT, 'http://sleepy-ocean-2065.herokuapp.com/');

server.addRoute({ method: 'GET', path: '/{param?}', handler: welcome });

function welcome (request) {

    request.reply('Welcome');
}

server.start(function () {

    console.log('Server started at ' + server.settings.uri);
});