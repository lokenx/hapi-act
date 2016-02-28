'use strict';

const Hoek = require('hoek');
const Server = require('./index');
const Composer = require('./manifest');

const internals = {};

Server.init(Composer.manifest, Composer.options, (err, server) => {

    Hoek.assert(!err, err);

    console.log(`Hapi API at ${server.connections[0].info.uri}`);
    console.log(`Hapi web at ${server.connections[1].info.uri}`);
});
