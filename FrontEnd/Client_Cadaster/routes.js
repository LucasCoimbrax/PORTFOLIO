const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home');
const newCadaster = require('./src/controllers/newCadaster')

route.get('/', home.homePage);
route.get('/newChamado/:params', newCadaster.formularioPage);

route.post('/newChamado', newCadaster.newCadaster)

module.exports = route;