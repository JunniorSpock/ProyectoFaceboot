import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FacebootServicesService } from '../../services/faceboot-services.service'
import { Post } from '../../models/post/post';
import { User } from 'src/app/models/user/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public nombre='';
public edad=0;
public nombreUsuario='';
public peliculas=[];
public id='';
public numPost;
public generoFav;

  constructor(
    private auS:AuthService, 
    private router:Router,
    private FacebootServices:FacebootServicesService, 
    private post:Post,
    private _flashMessagesService: FlashMessagesService) {}
   
  ngOnInit() {
    this.getDatos();
    this.getnum();
    this.getPublicacionesUsuario();
    this.getUsuarios();
  }

logOut(){
  this.auS.removerToken();
  this.router.navigate(['/login']);
}

getDatos(){
  const usuarioActual=this.auS.getUsuarioActual();
  this.nombre=usuarioActual.nombre;
  this.edad=usuarioActual.edad;
  this.nombreUsuario=usuarioActual.usuario;
  this.peliculas=usuarioActual.peliculasFavoritas;
  this.generoFav = usuarioActual.generosMusicales;
  this.id=usuarioActual._id;
}

getnum(){
  this.FacebootServices.numPost(this.id)
    .subscribe(res => {
      this.numPost = res;
    })
}

publicar(formPublicacion: NgForm){
  // this.FacebootServices.postPublicacion(formPublicacion.value, this.id)
  //   .subscribe(res => {
  //     if(res){
  //       console.log(res);
  //       this.getPublicacionesUsuario();
  //       this._flashMessagesService.show('¡Publicacion Agregada!', { cssClass: 'alert-success', timeout: 3000 });
  //       formPublicacion.reset();
  //     }
  //   })
  console.log(formPublicacion.value)
}

getUsuarios(){
  this.FacebootServices.getUsuarios().subscribe(res=>{
    if(res){
      this.FacebootServices.usuarios = res as User[];
    }
  })
}
getPublicaciones(){
  this.FacebootServices.getPublicaciones().subscribe(res=>{ 
    if(res){
      console.log(res);
    }
  });
}

agregar(usuarios:User){
    console.log(this.id + " " +  usuarios._id);
    let idAmigo = usuarios._id
    this.FacebootServices.putUsuarioAmigos(this.id, {idAmigo})
    .subscribe(res => {
      console.log(res)
      this._flashMessagesService.show('¡Amigo Agreado!', { cssClass: 'alert-success', timeout: 3000 });
    })
}

getPublicacionesUsuario(){
this.FacebootServices.getPublicacionesUsuarioId(this.id).subscribe(res=>{
  if(res){
    this.FacebootServices.post = res as Post[];
    console.log(res)
  }else{
    console.log(res);
  }
});


  
}


}
