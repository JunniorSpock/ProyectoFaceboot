import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FacebootServicesService } from './services/faceboot-services.service';
import { AuthService } from './services/auth.service';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import {Post} from './models/post/post';
import {TimeAgoPipe} from 'time-ago-pipe';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarseComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    FacebootServicesService,
    AuthService,
    Post,
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService ,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
