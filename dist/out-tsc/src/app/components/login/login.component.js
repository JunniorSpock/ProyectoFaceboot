import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(fbService, authService, router) {
        this.fbService = fbService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    irRegistro() {
        this.router.navigate(['/registrarse']);
    }
    //DATA BINDING
    login(form) {
        try {
            if (form) {
                this.fbService.postUsuarioLogin(form.value).subscribe(res => {
                    if (res == null) {
                        console.log(res);
                        this.router.navigate(['/login']);
                    }
                    else {
                        console.log(res);
                        this.router.navigate(['/home']);
                    }
                }, error => {
                    console.log(error);
                    this.router.navigate(['/login']);
                });
            }
            else {
                this.router.navigate(['/login']);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    Registrarse(form) {
        this.fbService.postUsuario(form.value)
            .subscribe(res => {
            console.log(res);
            form.reset();
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map