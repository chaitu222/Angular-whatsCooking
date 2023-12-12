// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3001/api/users';
 
  constructor(private http: HttpClient) {}
 
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
 
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
 
  updateUser(userId: string, user: any): Observable<any> {
    if (!userId) {
      return throwError('User ID is undefined or null');
    }
 
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<any>(url, user).pipe(
      catchError((error) => {
        console.error('Error updating user:', error);
        return throwError('Error updating user');
      })
    );
  }
 
  deleteUser(userId: string): Observable<any> {
    if (!userId) {
      return throwError('User ID is undefined or null');
    }
 
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url).pipe(
      catchError((error) => {
        console.error('Error deleting user:', error);
        return throwError('Error deleting user');
      })
    );
  }
 
  deleteUserField(userId: string, fieldToDelete: string): Observable<any> {
    if (!userId || !fieldToDelete) {
      return throwError('User ID or field to delete is undefined or null');
    }
 
    const url = `${this.apiUrl}/${userId}/deleteField`;
    const body = { fieldToDelete };
 
    return this.http.put<any>(url, body).pipe(
      catchError((error) => {
        console.error(`Error deleting ${fieldToDelete} for user:`, error);
        return throwError(`Error deleting ${fieldToDelete} for user`);
      })
    );
  }
}