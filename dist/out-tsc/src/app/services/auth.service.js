import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor() { }
    guardarToken(token, usuario) {
        localStorage.setItem("ACCESS_TOKEN", token);
        localStorage.setItem("USUARIO", JSON.stringify(usuario));
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem("ACCESS_TOKEN");
        }
        return this.token;
    }
    getUsuarioActual() {
        this.tokenUsuario = localStorage.getItem("USUARIO");
        if (this.tokenUsuario) {
            const usuarioActual = JSON.parse(this.tokenUsuario);
            return usuarioActual.usuarioBD2;
        }
    }
    removerToken() {
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('USUARIO');
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map