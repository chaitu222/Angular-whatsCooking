//  recipe.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private appId = '8fab9355'; // Replace with your Edamam Application ID
  private appKey = 'fcc166976523d99bbba23e757d18a6d8'; // Replace with your Edamam Application Key
  private apiUrl = 'https://api.edamam.com/search'; // Replace with the Edamam API endpoint

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