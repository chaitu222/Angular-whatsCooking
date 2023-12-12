import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router) { }

  onLoginSubmit() {
    const predefinedUsername = 'Chaitanya';
    const predefinedPassword = '12345';

    if (this.username.trim() === predefinedUsername && this.password === predefinedPassword) {
      
      this.router.navigate(['/admindashboard']);
    } else {
     // if invalid details
      alert('Invalid credentials. Please try again.');
    }
  }
}
