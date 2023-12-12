//  recipe.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private appId = '497b3aef'; 
  private appKey = '5f9134094bf991abcd33ca86ac8ac16d'; 
  private apiUrl = 'https://api.edamam.com/search'; //endpoint dont change

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?q=${query}&app_id=${this.appId}&app_key=${this.appKey}`);
  }
}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecipeService {
//   private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php'; // MealDB API endpoint

//   constructor(private http: HttpClient) {}

//   searchRecipes(query: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}?s=${query}`);
//   }
// }