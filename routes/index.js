const express       = require('express');
var api             = express.Router();
var destinatario    = require('./destinatario');
var historial       = require('./historial');
var transferencia  = require('./transferencia');

api.route('/destinatarios')
.post(destinatario.nuevoDestinatario);

api.route('/historial')
.get(historial.obtenerHistorial);

api.route('/transferencia')
.post(transferencia.generaTransferencia);

module.exports = api;