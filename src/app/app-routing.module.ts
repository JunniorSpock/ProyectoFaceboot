import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard'
import { HomeComponent } from './components/home/home.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent, canActivate:[AuthGuard]
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
