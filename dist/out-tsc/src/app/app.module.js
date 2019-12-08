import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FacebootServicesService } from './services/faceboot-services.service';
import { AuthService } from './services/auth.service';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { Post } from './models/post/post';
import { TimeAgoPipe } from 'time-ago-pipe';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
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
        ],
        providers: [
            FacebootServicesService,
            AuthService,
            Post,
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map