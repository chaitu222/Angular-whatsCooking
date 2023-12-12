import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserregistrationComponent } from './user/userregistration/userregistration.component'; 
import { MainComponent } from './main/main.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ExploreComponent } from './explore/explore.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'reset', component: ResetpasswordComponent },
  { path: 'userregistration', component: UserregistrationComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'adminhome', component: AdminHomeComponent},
  { path: 'explore', component: ExploreComponent},
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
