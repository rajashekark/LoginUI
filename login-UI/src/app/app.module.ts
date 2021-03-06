import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    DisplayUsersComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
   
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
