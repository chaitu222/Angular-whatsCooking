import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AdminrecipesService {
  private apiUrl = 'http://localhost:4000/recpie';
 
  constructor(private http: HttpClient) {}
 
 
 
  addRecipe(recipe: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, recipe);
  }
  getRecipes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/recipes`);
  }
 
  removeRecipe(recipeId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete(`${this.apiUrl}/delete/${recipeId}`, { headers });
  }
 
  endorseRecipe(recipeId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.patch(`${this.apiUrl}/endorse/${recipeId}`, {}, { headers });
  }
 
  editRecipe(recipeId: string, updatedRecipe: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put(`${this.apiUrl}/update/${recipeId}`, updatedRecipe, { headers });
  }

  toggleRecipe(recipeId: string, enable: boolean): Observable<any> {
    const url = `${this.apiUrl}/recipes/${recipeId}/toggle`;
    const body = { enable: enable };
    return this.http.put(url, body);
  }
}