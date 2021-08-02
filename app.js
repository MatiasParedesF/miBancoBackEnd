var express     = require('express');
var mongoClient = require('mongodb').MongoClient;
var cors        = require('cors');
var path        = require('path');
var app         = express();
var base        = path.dirname(__dirname);


var api     = require('./routes/index');

mongoClient.connect('mongodb://127.0.0.1:27017/miBanco',{ useNewUrlParser: true },function(err,bd){
    if(err){
        console.log(err);
    }
    else{
        app.locals.bd=bd;
    }
})

app.use(express.static(path.join(base,'html')));
app.use(cors());
app.use('/api', api);

console.log(path.join(base,'html'))

module.exports=app;