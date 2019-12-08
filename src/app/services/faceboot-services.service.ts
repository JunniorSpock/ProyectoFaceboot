import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Post } from '../models/post/post';
import { User } from '../models/user/user';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class FacebootServicesService {
 
  post: Post[];
  usuarios: User[]
  usuarioSeleccionado: User;
  readonly URL_API = "http://localhost:3000";
  constructor(private http: HttpClient, private auServ:AuthService) { 
  this.usuarioSeleccionado = new User();
  }

//FUNCIONA
  //Entrar a faceboot
  postUsuarioLogin(usuarioFrm: User):Observable<User>{
    return this.http.post<User>(`${this.URL_API}/login`,usuarioFrm).pipe(tap(
      (res: User)=>{
      if (res){
        
          this.auServ.guardarToken(res.token,res);
      }
    })
    );
  }

  //Obtener todos los usuarios
  getUsuarios(){
    return this.http.get(`${this.URL_API}/Usuarios`);
  }

  //obtener publicaciones por id
  getPublicacionesUsuarioId(id:string){
    return this.http.get(`${this.URL_API}/MyPost/${id}`);
  }

  numPost(id:string){ 
    return this.http.get(`${this.URL_API}/numPublicaciones/${id}`)
  }

  //obtener todas las publicaciones
  getPublicaciones(){
    return this.http.get(`${this.URL_API}/Publicaciones`);
  }
  
  //obtener un usuario por ID
  getUsuario(_id: string){
    return this.http.get(this.URL_API + `/${_id}`);
  }


   //obtener las publicaciones con los tags
   getPublicacionesPorTags(tag: string){
    return this.http.get(this.URL_API + `/${tag}`);
  }

  //Crear un usuario
  postUsuario(usuario: User){
    return this.http.post(`${this.URL_API}/Usuario`, usuario)
  }

  //Crear publicacion
  postPublicacion(post:any, id:any){
    return this.http.post(`${this.URL_API}/Publicacion/${id}`, post);
  }

  //Agregar amigos
  putUsuarioAmigos(idUsuario:string, idAmigo: any ){
    return this.http.put(`${this.URL_API}/AgregarAmigo/${idUsuario}`, idAmigo);
  }

  //Eliminar mis publicaciones
  deletePublicaciones(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}
/*
 

*/