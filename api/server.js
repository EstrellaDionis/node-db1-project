const express = require("express");

const accountsRouter = require('./accounts/accounts-router'); 

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.use('*', (req, res) => { //the catch all. ALWAYS GOES AT THE BOTTOM
    res.status(404).json({
        message: 'not found',
    })
})

module.exports = server;
