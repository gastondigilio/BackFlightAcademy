const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const routes = require('../routes/index.js');
const optionCors = require('../middlewares/optionCors');
const optionSession = require('../middlewares/optionSession');
const handlerErrors = require('../middlewares/handlerErrors');
require('./db.js');

const server = express();

server.name = 'API';

// Config Server
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(session(optionSession));
server.use(optionCors);

// Routes
server.use('/', routes);

// Error catching endware.
server.use(handlerErrors)

module.exports = server
