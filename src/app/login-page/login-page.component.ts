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
      // Successful login - navigate to the home page
      this.router.navigate(['/adminhome']);
    } else {
      // Failed login - show an error message or handle accordingly
      alert('Invalid credentials. Please try again.');
    }
  }
}
