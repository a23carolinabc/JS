export class Usuario {

    usuario; 
    contrasena;
    rol;

    constructor(usuario, contrasena, rol) {
        this.contrasena = contrasena;
        this.rol = rol;
        this.usuario = usuario;
    }
}