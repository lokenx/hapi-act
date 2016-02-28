'use strict';

exports.register = (server, options, next) => {

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: (request, reply) => {

            const name = encodeURIComponent(request.params.name);
            reply(`Hello ${name}!`);
        }
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};
