import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../categories-details/categories-details.component';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getAllRecipes(categoryId: number) {
    return this.http.get(
      `https://foodrecipeappapi20221107170809.azurewebsites.net/api/v1/categories/${categoryId}/recipes`
    );
  }

  addRecipe(categoryId: number, recipe: Recipe): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.post(
      `https://foodrecipeappapi20221107170809.azurewebsites.net/api/v1/categories/${categoryId}/recipes`,
      { ...recipe, isVegetarian: true, isVegan: false },
      { headers }
    );
  }
}
