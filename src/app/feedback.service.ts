import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:4000/api/'; 
 
  constructor(private http: HttpClient) {}
 
  submitFeedback(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}feedback`, formData);
  }
}