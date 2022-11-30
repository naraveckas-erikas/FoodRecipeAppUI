import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }
}
