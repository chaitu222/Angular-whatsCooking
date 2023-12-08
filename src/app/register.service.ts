// registration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:4000/api/auth/';
 
  constructor(private http: HttpClient) {}
 
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}register`, user);
  }
 
  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, user);
  }
 
}