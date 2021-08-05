function Transferencia(bd){
    "use strict";

    this.db=bd.db("miBanco");

    this.getHistorialTransferencias=function(usuario,callback){
        this.db.collection("transferencias").aggregate([{"$match":{usuario:usuario}},{$lookup:{from:"destinatarios",localField:"destinatario",foreignField:"_id",as:"destinatario"}},{$project:{"_id":0,"cuenta":0,destinario:0}}]).toArray((err,historial)=>{
            if(err){
                callback(err,null);
            }
            else{
                callback(null,historial);
            }
        })
    }
    this.realizaTransferencia=function(transferencia,callback){
        this.db.collection("transferencias").insertOne(transferencia,(err,transferencia)=>{
            if(err){
                callback(err,null)
            }
            else{
                callback(null,transferencia)
            }
        })
    }
}

module.exports.Transferencia=Transferencia;

