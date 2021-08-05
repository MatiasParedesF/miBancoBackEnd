const express       = require('express');
var api             = express.Router();
var destinatario    = require('../controllers/destinatario.controller');
var transferencia  = require('../controllers/transferencia.controller');

api.route('/destinatario')
.post(destinatario.nuevoDestinatario)
.get(destinatario.buscarDestinatarios);

api.route('/historial')
.get(transferencia.obtenerHistorial);

api.route('/transferencia')
.post(transferencia.realizaTransferencia);

module.exports = api;