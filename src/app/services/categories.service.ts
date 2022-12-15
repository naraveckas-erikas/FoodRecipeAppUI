import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(
      'https://foodrecipeappapi20221107170809.azurewebsites.net/api/v1/categories'
    );
  }

  addCategory(payload: any): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.post(
      'https://foodrecipeappapi20221107170809.azurewebsites.net/api/v1/categories',
      {
        name: payload.name,
        description: payload.description,
      },
      { headers }
    );
  }

  consoleLog() {
    console.log('called from service');
  }
}
