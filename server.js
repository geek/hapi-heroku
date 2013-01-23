var Hapi = require('hapi');

var server = new Hapi.Server(+process.env.PORT, '65.26.127.12');

server.addRoute({ method: 'GET', path: '/{param?}', handler: welcome });

function welcome (request) {

    request.reply('Welcome');
}

server.start(function () {

    console.log('Server started at ' + server.settings.uri);
});