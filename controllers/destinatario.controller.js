
var Destinatario=require('../clases/destinatario.clase').Destinatario;
var Modelo=require('../modelo/destinatario.modelo').modeloDestinatario;

module.exports={
    nuevoDestinatario:async(req,res,next)=>{
        var destinatario = new Destinatario(req.app.locals.bd);
        try{
            var termino      = req.body.destinatario;
            var modelo       = new Modelo(termino);
            if(modelo.dv===''|| modelo.run===''||modelo.correo===''){
                res.status(404).end();
            }
            else{
                destinatario.crearDestinatario(modelo,(err,destinatario)=>{
                    if(err){
                        res.status(404).end();
                    }else{
                        res.status(202).json(destinatario);
                    }
                })
            }
        }
        catch(Error){
            res.status(404).end()   
        }
    },
    buscarDestinatarios:async(req,res,next)=>{

        try{
            var destinatario = new Destinatario(req.app.locals.bd);
            
            var termino=req.query.termino;

            destinatario.buscarDestinatarios(termino,(err,destinatarios)=>{
            if(err){
                res.send({error:true,msg:""});
            }
            else{
                res.send(destinatarios)
            }
        })

        }
        catch(Error){
            res.status(404).end();
        }
        
    }


}