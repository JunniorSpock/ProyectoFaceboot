import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(auS, router, FacebootServices, post) {
        this.auS = auS;
        this.router = router;
        this.FacebootServices = FacebootServices;
        this.post = post;
        this.nombre = '';
        this.edad = 0;
        this.nombreUsuario = '';
        this.peliculas = [];
        this.id = '';
    }
    ngOnInit() {
        this.getDatos();
        this.getnum();
        this.getPublicacionesUsuario();
        this.getUsuarios();
    }
    logOut() {
        this.auS.removerToken();
        this.router.navigate(['/login']);
    }
    getDatos() {
        const usuarioActual = this.auS.getUsuarioActual();
        this.nombre = usuarioActual.nombre;
        this.edad = usuarioActual.edad;
        this.nombreUsuario = usuarioActual.usuario;
        this.peliculas = usuarioActual.peliculasFavoritas;
        this.id = usuarioActual._id;
    }
    getnum() {
        this.FacebootServices.numPost(this.id)
            .subscribe(res => {
            this.numPost = res;
        });
    }
    publicar(formPublicacion) {
        const usuarioActual = this.auS.getUsuarioActual();
        const valoresForm = formPublicacion.value;
        this.post = valoresForm;
        this.post.autorPublicacion = usuarioActual._id;
        this.post.tags = [{
                tag: valoresForm.tags
            }];
        this.FacebootServices.postPublicacion(this.post).subscribe(res => {
            this.post = res;
            if (res) {
                console.log(this.post);
            }
            else {
                console.log(res);
            }
        });
    }
    getUsuarios() {
        this.FacebootServices.getUsuarios().subscribe(res => {
            if (res) {
                this.FacebootServices.usuarios = res;
            }
        });
    }
    getPublicaciones() {
        this.FacebootServices.getPublicaciones().subscribe(res => {
            if (res) {
                console.log(res);
            }
        });
    }
    agregar(usuarios) {
        console.log(this.id + " " + usuarios._id);
        this.FacebootServices.putUsuarioAmigos(this.id, usuarios._id)
            .subscribe(res => {
            console.log(res);
        });
    }
    getPublicacionesUsuario() {
        this.FacebootServices.getPublicacionesUsuarioId(this.id).subscribe(res => {
            if (res) {
                this.FacebootServices.post = res;
                console.log(res);
            }
            else {
                console.log(res);
            }
        });
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map