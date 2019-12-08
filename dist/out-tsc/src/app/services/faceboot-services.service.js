import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { tap } from 'rxjs/operators';
let FacebootServicesService = class FacebootServicesService {
    constructor(http, auServ) {
        this.http = http;
        this.auServ = auServ;
        this.URL_API = "http://localhost:3000";
        this.usuarioSeleccionado = new User();
    }
    //FUNCIONA
    //Entrar a faceboot
    postUsuarioLogin(usuarioFrm) {
        return this.http.post(`${this.URL_API}/login`, usuarioFrm).pipe(tap((res) => {
            if (res) {
                this.auServ.guardarToken(res.token, res);
            }
        }));
    }
    //Obtener todos los usuarios
    getUsuarios() {
        return this.http.get(`${this.URL_API}/Usuarios`);
    }
    //obtener publicaciones por id
    getPublicacionesUsuarioId(id) {
        return this.http.get(`${this.URL_API}/MyPost/${id}`);
    }
    numPost(id) {
        return this.http.get(`${this.URL_API}/numPublicaciones/${id}`);
    }
    //obtener todas las publicaciones
    getPublicaciones() {
        return this.http.get(`${this.URL_API}/Publicaciones`);
    }
    //obtener un usuario por ID
    getUsuario(_id) {
        return this.http.get(this.URL_API + `/${_id}`);
    }
    //obtener las publicaciones con los tags
    getPublicacionesPorTags(tag) {
        return this.http.get(this.URL_API + `/${tag}`);
    }
    //Crear un usuario
    postUsuario(usuario) {
        return this.http.post(`${this.URL_API}/Usuario`, usuario);
    }
    //Crear publicacion
    postPublicacion(post) {
        return this.http.post(`${this.URL_API}/Publicacion`, post);
    }
    //Agregar amigos
    putUsuarioAmigos(idUsuario, idAmigo) {
        return this.http.put(`${this.URL_API}/AgregarAmigo/${idUsuario}`, `${idAmigo}`);
    }
    //Eliminar mis publicaciones
    deletePublicaciones(_id) {
        return this.http.delete(this.URL_API + `/${_id}`);
    }
};
FacebootServicesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], FacebootServicesService);
export { FacebootServicesService };
/*
 

*/ 
//# sourceMappingURL=faceboot-services.service.js.map