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
app.use(function(req,res,next){
    var err=new Error('Archivo no encontrado');
    err.status=404;
    next(err);
});
app.use(function(err,req,res,next){
    res.status(err.status||500);
    res.send(err.menssage);
})


module.exports=app;