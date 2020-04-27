import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginModel } from '../models/login-model';
import { Observable } from 'rxjs';
import { SignupModel } from '../models/signup-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TokenKey = 'token';
  private readonly PORT = '5001';
  private readonly HOST = 'https://localhost';

  constructor(private http: HttpClient) { }

  public authenticate(userData: LoginModel) : Observable<any> {
    return this.http.post(`${this.HOST}:${this.PORT}/api/users/authenticate`, userData);
  }

  public signup(userData: SignupModel) : Observable<any> {
    return this.http.post(`${this.HOST}:${this.PORT}/api/users/signup`, userData);
  }

  public isAuthenticated() : boolean {
    return !!localStorage.getItem(this.TokenKey);
  }

  public setSession(token: string) : void {
    localStorage.setItem(this.TokenKey, token);
  }

  public logout() : void {
    localStorage.removeItem(this.TokenKey);
  }

  public test() : Observable<any> {
    return this.http.get(`${this.HOST}:${this.PORT}/api/users/testAuth`);
  }

  public getToken() : string {
    return localStorage.getItem(this.TokenKey);
  }
}
