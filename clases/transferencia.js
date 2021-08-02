function Transferencia(bd){
    "use strict";

    this.db=bd.bd("miBanco");

    this.getHistorialTransferencias=function(usuario,callback){

        this.db.collection("transferencias").find({}).toArray((err,transferencias)=>{
            if(err){
                callback(err,null);
            }
            else{
                callback(null,transferencias);
            }
        })
    }
}

module.exports.Transferencia=Transferencia;