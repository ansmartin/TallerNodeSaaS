
function Sistema(){
    this.usuarios=[];
    this.agregarUsuario=function(nick,clave){
        this.usuarios.push(new Usuario(nick,clave));
    }
}

function Usuario(nick, clave){
    this.nick=nick;
    this.clave=clave;
}

module.exports.Sistema=Sistema;