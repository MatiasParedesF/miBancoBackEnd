module.exports={
    generaTransferencia:async(req,res,next)=>{
        res.json({msg:'transferencia',err:false});
    }
}

class Transferencia{
    constructor(){
        this._id=nuevoId;
        this.nombres='';
        this.correo='';
        this.banco='';
        this.tipoCuenta='';
        this.fecha='';
        this.monto='';
        this._origen='';

    }
}