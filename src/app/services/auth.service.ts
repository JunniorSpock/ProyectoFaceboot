import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private tokenUsuario:string;
  // public usuarioLocalStorage= this.auS.getUsuarioActual();
  // public usuarioParseado= JSON.parse(this.usuarioLocalStorage);
  public usuarioLocalStorag;
  public usuarioParseado;
  constructor() { }


   guardarToken(token:string,usuario:User):void{
    localStorage.setItem("ACCESS_TOKEN",token);
    localStorage.setItem("USUARIO",JSON.stringify(usuario));
    this.token=token;
  }
  

  getToken():string{
    if(!this.token){
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
  getUsuarioActual():User{
    this.tokenUsuario=localStorage.getItem("USUARIO");
    if(this.tokenUsuario){
    const usuarioActual = JSON.parse(this.tokenUsuario);
    return usuarioActual.usuarioBD2;
  }

  }

  

  removerToken(){
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USUARIO');
  }
}
