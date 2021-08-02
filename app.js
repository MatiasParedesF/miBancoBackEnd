var express     = require('express');
var mongoClient = require('mongodb').MongoClient;
var cors        = require('cors');
var app         = express();


var api     = require('./routes/index');

mongoClient.connect('mongodb://127.0.0.1:27017/miBanco',{ useNewUrlParser: true },function(err,bd){
    if(err){
        console.log(err);
    }
    else{
        app.locals.bd=bd;
    }
})
app.use(cors());

app.use('/api', api);

module.exports=app;