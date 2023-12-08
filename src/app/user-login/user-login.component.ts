import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../register.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
 
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  {
loginForm: FormGroup<any>;
 
 
  constructor(private fb: FormBuilder, private loginService: RegistrationService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  isFieldInvalid(field: string) {
    return this.loginForm.get(field)!.invalid && this.loginForm.get(field)!.touched;
  }
 
  isFieldTouched(field: string) {
    return this.loginForm.get(field)!.touched;
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.loginService.loginUser(user).subscribe(
        (response) => {
          alert('login successful:');
          this.loginForm.reset();
          this.router.navigate(['home'])
          // Handle success, e.g., redirect to login page
        },
        (error) => {
          alert('invalid credentials');
          // Handle error, e.g., display error message to the user
        }
      );
    }
  }
  }