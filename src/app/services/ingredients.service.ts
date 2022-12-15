import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../ingredients/ingredients.component';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  constructor(private http: HttpClient) {}

  getAllIngredients(categoryId: number, recipeId: number) {
    return this.http.get(
      `https://foodrecipeappapi20221107170809.azurewebsites.net/api/v1/categories/${categoryId}/recipes/${recipeId}/ingredients`
    );
  }

  addIngredient(
    categoryId: number,
    recipeId: number,
    ingredient: Ingredient
  ): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.post(
      `https://foodrecipeappapi20221107170809.azurewebsites.net/api/v1/categories/${categoryId}/recipes/${recipeId}/ingredients`,
      { ...ingredient },
      { headers }
    );
  }
}
