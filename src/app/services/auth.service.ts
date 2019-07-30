import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginModel } from '../models/login-model';
import { Observable } from 'rxjs';
import { SignupModel } from '../models/signup-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public authenticate(userData: LoginModel) : Observable<any> {
    return this.http.post('https://localhost:44387/users/authenticate', userData);
  }

  public signup(userData: SignupModel) : Observable<any> {
    return this.http.post('https://localhost:44387/users/signup', userData);
  }
}
