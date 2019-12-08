import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(authServicio, router) {
        this.authServicio = authServicio;
        this.router = router;
    }
    canActivate() {
        if (this.authServicio.getToken()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map