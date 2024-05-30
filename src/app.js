const express = require('express');
const bodyParser = require('body-parser');

const { consultarMensajesHandler, crearCampanaHandler } = require('./controller');

const app = express();

app.use(bodyParser.json());

app.post('/DESA/consultar-mensajes', consultarMensajesHandler);
app.post('/DESA/crear-campana', crearCampanaHandler);

module.exports = app;