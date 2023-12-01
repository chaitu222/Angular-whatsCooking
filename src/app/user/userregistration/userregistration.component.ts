import { Component } from '@angular/core';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
    user = {
      firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    };

registerUser(): void {
    
console.log('User registered:', this.user);
      
    }
   
}

