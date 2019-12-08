export class User {

    _id: string;
    nombre: string;
    usuario: string;
    edad: number;
    sexo: string;
    contrasenia: string;
    fechaNacimiento: string;
    generosMusicales: object;
    numPost:object;
    peliculasFavoritas: [{
        nombre: string;
    }]
    usuariosAmigos: [{
        nombre: string;
    }]
    token:string
}