import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserregistrationComponent } from './user/userregistration/userregistration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ExploreComponent } from './explore/explore.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    UserregistrationComponent,
    NavbarComponent,
    MainComponent,
    UserLoginComponent,
    ContactUsComponent,
    FeedbackComponent,
    MyprofileComponent,
    AdminHomeComponent,
    ExploreComponent,
    FooterComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
