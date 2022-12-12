import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(input: any) {
    return this.http.post(
      'https://foodrecipeappapi20221107170809.azurewebsites.net/api/v1/login',
      input
    );
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token') != null
      ? localStorage.getItem('token')
      : '';
  }

  register(payload: any) {
    return this.http.post(
      'https://foodrecipeappapi20221107170809.azurewebsites.net/api/v1/register',
      payload
    );
  }
}
