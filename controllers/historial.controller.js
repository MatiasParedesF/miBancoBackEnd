var Transferencia=require('../clases/transferencia').Transferencia;

module.exports={
    obtenerHistorial:async(req,res,next)=>{
        var transferencia = new Transferencia(req.app.locals.bd);

        transferencia.getHistorialTransferencias(null,(err,transferencia)=>{
            if(err){
                res.send({error:true, msg:""});
            }
            else{
                res.send(transferencia);
            }
        })
    }
}