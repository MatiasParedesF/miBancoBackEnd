function Transferencia(bd){
    "use strict";

    this.db=bd.db("miBanco");

    this.getHistorialTransferencias=function(usuario,callback){
        this.db.collection("transferencias").aggregate([{"$match":{usuario:usuario}},{$lookup:{from:"destinatarios",localField:"destinario",foreignField:"_id",as:"detinatario"}},{$project:{"_id":0,"cuenta":0,destinario:0}}]).toArray((err,historial)=>{
            if(err){
                callback(err,null);
            }
            else{
                callback(null,historial);
            }
        })
    }
}

module.exports.Transferencia=Transferencia;