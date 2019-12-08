import { Component, OnInit } from '@angular/core';
import { FacebootServicesService } from '../../services/faceboot-services.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fbService: FacebootServicesService, 
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  irRegistro(){
    this.router.navigate(['/registrarse']);
  }

//DATA BINDING
  login(form): void {
    try{
      if(form){
        this.fbService.postUsuarioLogin(form.value).subscribe(res => {
          if(res==null){
            console.log(res);
            this.router.navigate(['/login']);
          }else{
            console.log(res);
            this.router.navigate(['/home']);
          }
        },error => {
          console.log(error);
          this.router.navigate(['/login']);
        });
      }else{
        this.router.navigate(['/login']);
      }

    }catch(err){
      console.log(err);
    }
      
  }

  Registrarse(form: NgForm){
    this.fbService.postUsuario(form.value)
    .subscribe(res =>{
      console.log(res);
      form.reset();
  });
} 
  

}

