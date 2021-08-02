
var Destinatario=require('../clases/destinatario').Destinatario;

module.exports={
    nuevoDestinatario:async(req,res,next)=>{

    },
    buscarDestinatarios:async(req,res,next)=>{
        var destinatario = new Destinatario(req.app.locals.bd);
        
        var termino=req.query.termino;

        destinatario.getDestinatarios(termino,(err,destinatarios)=>{
            if(err){
                res.send({error:true,msg:""});
            }
            else{
                if(destinatarios.length ===0){
                    res.status(404).end();
                }
                else{
                    res.send(destinatarios)
                }
            }
        })
    }


}

class destinatario{
    constructor(body){
        this._id        = 'ObjectId';
        this.nombre     = 'string';
        this.correo     = 'string';
        this.banco      = [{'nombre':'','id':''}];
        this.cuenta     = [{tipo:'',numero:''}];
        this.fecha      = new Date;
        this.monto      = 0;
        this.indice     = 0;
    }
}