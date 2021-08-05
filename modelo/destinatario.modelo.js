const { ObjectId } = require("mongodb");

class Destinatario{
    
    constructor(destinatario){
        this._id=new ObjectId();
        this.nombre=destinatario.nombre;
        this.run=destinatario.run;
        this.dv=destinatario.dv;
        this.banco=[{nombre:destinatario.banco[0].name,id:destinatario.banco[0].id}];
        this.cuenta=[{tipo:destinatario.cuenta[0].tipo, numero:destinatario.cuenta[0].numero}];
        this.usuario="12345678";
        this.correo=destinatario.correo;
        this.telefono=destinatario.telefono;
    }
}

module.exports.modeloDestinatario=Destinatario;