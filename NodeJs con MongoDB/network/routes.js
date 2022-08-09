express = require('express');
const message = require('../Components/message/network.js');


const routes = (server) => {
    server.use('/soy', message);
}

module.exports = routes;