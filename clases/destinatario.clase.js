function Destinatario(bd){
    "use strict";

    this.db=bd.db("miBanco");

    this.buscarDestinatarios=function(termino,callback){    
        var pattern=termino.toString();

        this.db.collection("destinatarios").find({"nombre":{"$regex":pattern, "$options":'ix'}}).toArray((err,destinatarios)=>{
            if(err){
                callback(err,null);

            }
            else{
                callback(null,destinatarios);
            }
        })
    },

    this.crearDestinatario=function(destinatario, callback){
        this.db.collection("destinatarios").insertOne(destinatario,(err,destinatario)=>{
            if(err){
                callback(err,null);
            }
            else{
                callback(null,destinatario);
            }
        })
    }
}

module.exports.Destinatario=Destinatario;

// db.destinatarios.insert({nombre:"joaquin valdes",run:"18765432", dv:"k",banco:[{nombre:"Banco Estado",id:"0000003"}], cuenta:[{tipo:"cuenta vista", numero:"12345891"}], usuario:"12345678"})
// db.destinatarios.insert({nombre:"julian gonzalez",run:"23432198", dv:"7",banco:[{nombre:"Banco Chile",id:"0000004"}], cuenta:[{tipo:"cuenta vista", numero:"12345891"}], usuario:"12345678"})