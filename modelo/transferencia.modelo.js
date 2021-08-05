const { ObjectId } = require("mongodb");

class Transferencia{
    
    constructor(transferencia){
        this._id=new ObjectId();
        this.fecha=new Date();
        this.usuario=transferencia.usuario;
        this.cuenta=transferencia.cuenta;
        this.destinatario=ObjectId(transferencia.destinatario);
        this.monto=Number(transferencia.monto);
    }
}

module.exports.modeloTransferencia=Transferencia;