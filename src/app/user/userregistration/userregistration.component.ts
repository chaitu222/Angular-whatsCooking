import { Component } from '@angular/core';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  signupusers:any=[];  
  
  userobj = {
      firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    };


  ngOnInit():void{ 
    const localData=localStorage.getItem('signsignupusers');
    if(localData !=null){
      this.signupusers=JSON.parse(localData)
    }
  }
  
  onSignUp(){
    this.signupusers.push(this.userobj);
    localStorage.setItem('signupusers',JSON.stringify(this.signupusers));
    this.userobj = {
      firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    };
    }
  
registerUser(): void {

console.log('User registered:', this.userobj);

    }
}

