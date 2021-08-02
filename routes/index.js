const express       = require('express');
var api             = express.Router();
var destinatario    = require('../controllers/destinatario.controller');
var historial       = require('../controllers/historial.controller');
var transferencia  = require('../controllers/transferencia.controller');

api.route('/destinatario')
.get(destinatario.buscarDestinatarios);

api.route('/historial')
.get(historial.obtenerHistorial);

api.route('/transferencia')
.post(transferencia.generaTransferencia);

module.exports = api;