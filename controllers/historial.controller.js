var Transferencia=require('../clases/transferencia').Transferencia;

module.exports={
    obtenerHistorial:async(req,res,next)=>{
        var transferencia = new Transferencia(req.app.locals.bd);
        var usuario       = req.query.usuario;
        
        transferencia.getHistorialTransferencias(usuario,(err,transferencia)=>{
            if(err){
                res.send({error:true, msg:""});
            }
            else{
                res.send(transferencia);
            }
        })
    }
}