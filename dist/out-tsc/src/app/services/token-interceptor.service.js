import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(AuthService);
        //let maestroservice= this.injector.get(MaestroserviceService);
        let tokenizeRequest = req.clone({
            setHeaders: {
                Authorization: authService.getToken()
            }
        });
        return next.handle(tokenizeRequest);
    }
};
TokenInterceptorService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TokenInterceptorService);
export { TokenInterceptorService };
//# sourceMappingURL=token-interceptor.service.js.map