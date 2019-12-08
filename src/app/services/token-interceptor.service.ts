import { Injectable, Injector } from '@angular/core';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector:Injector) { }


  intercept ( req, next){
    let authService= this.injector.get(AuthService);
    //let maestroservice= this.injector.get(MaestroserviceService);
    let tokenizeRequest= req.clone({
      setHeaders: {
        Authorization: authService.getToken()
      }
    })
      return next.handle(tokenizeRequest)
    
  }
}
