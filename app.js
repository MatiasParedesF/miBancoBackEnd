var express = require('express');
var app     = express();
var api     = require('./routes/index');


app.use('/api', api);

module.exports=app;