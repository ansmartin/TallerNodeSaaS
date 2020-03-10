
function Sistema(){
    this.usuarios={};
    this.agregarUsuario=function(nick,clave,callback){
        //se deberia usar el email
        if(!this.usuarios[nick]){
            this.usuarios[nick] = new Usuario(nick,clave);
            console.log("Nuevo usuario creado."); 
        }
        else console.log("El usuario ya existe");

        callback(usr);
    }

    this.getUsuario=function(nick){
        if(this.usuarios[nick]){
            return this.usuarios[nick];
        }
        else console.log("El usuario no existe"); 
    }

    
    this.getUsuarios=function(callback){
        callback(this.usuarios);
    }

    this.eliminarUsuario=function(nick){
        if(this.usuarios[nick]){
            delete this.usuarios[nick];
            console.log("Usuario eliminado."); 
        }
        else console.log("El usuario no existe"); 
    }
}

function Usuario(nick, clave){
    this.nick=nick;
    this.clave=clave;
}