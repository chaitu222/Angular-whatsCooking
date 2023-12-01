import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserregistrationComponent } from './user/userregistration/userregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    UserregistrationComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
