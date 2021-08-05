var Transferencia=require('../clases/transferencia.clase').Transferencia;
var Modelo =require('../modelo/transferencia.modelo').modeloTransferencia;

module.exports={
    realizaTransferencia:async(req,res,next)=>{
        
        //console.log(req.app.locals.bd);
        var transferencia = new Transferencia(req.app.locals.bd);
        try{

            var termino       = req.body.transferencia;
            var modelo        = new Modelo(termino);
            
        if(modelo.monto>0){
            transferencia.realizaTransferencia(modelo,(err,transferencia)=>{
                if(err){
                
                    res.status(404).end();
                }
                else{
                    res.status(202).json({error:false,transferencia:'Exitosa'});
                }
            })
        }
        else{
            res.status(202).json({error:true,monto:termino.valor})
        }
        
        }
        catch(Error){
            res.status(404).end();
        }

    },

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
