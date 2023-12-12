import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/register.service';
 
@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  registrationForm: FormGroup;
 
  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
 
  isFieldInvalid(field: string) {
    return this.registrationForm.get(field)!.invalid && this.registrationForm.get(field)!.touched;
  }
 
  isFieldTouched(field: string) {
    return this.registrationForm.get(field)!.touched;
  }
 
  onSubmit(): void {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value;
      this.registrationService.registerUser(user).subscribe(
        (response) => {
          alert('Registration successful:');
          this.registrationForm.reset();
          this.router.navigate(['userLogin'])
          // Handle success, e.g., redirect to login page
        },
        (error) => {
          console.error('Registration failed:', error);
          alert('Registration failed ')
          // Handle error, e.g., display error message to the user
        }
      );
    }
  }
}