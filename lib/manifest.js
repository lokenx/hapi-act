'use strict';

const Path = require('path');
const Port = process.env.PORT || 8000;

const internals = {};

const composer = module.exports = {};

composer.manifest = {
    server: {
        debug: false
    },
    connections: [
        {
            host: 'localhost',
            port: Port + 1,
            labels: ['api']
        },
        {
            host: 'localhost',
            port: Port,
            labels: ['web'],
            routes: {
                files: {
                    relativeTo: Path.join(__dirname, '../dist')
                }
            }
        }
    ],
    registrations: [
        {
            plugin: 'inert'
        },
        {
            plugin: './plugins/example',
            options: {
                routes: {
                    prefix: '/api'
                },
                select: ['api']
            }
        },
        {
            plugin: './plugins/app',
            options: {
                select: ['web']
            }
        }
    ]
};

composer.options = {
    relativeTo: __dirname
};
