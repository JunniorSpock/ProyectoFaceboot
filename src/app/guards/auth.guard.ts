import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authServicio:AuthService,private router:Router){

  }
  
    canActivate(){
  if (this.authServicio.getToken()){
  return true;
  }else {
    this.router.navigateByUrl('/login');
    return false;
  }
    }
}
