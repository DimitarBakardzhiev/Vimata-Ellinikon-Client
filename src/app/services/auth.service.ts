import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginModel } from '../models/login-model';
import { Observable } from 'rxjs';
import { SignupModel } from '../models/signup-model';
import * as jwt_decode from "jwt-decode";
import { ChangePasswordModel } from '../models/change-password-model';
import { UpdateUser } from '../models/update-user';

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

  public resetPassword(email: string) : Observable<any> {
    return this.http.get(`${this.HOST}:${this.PORT}/api/users/resetPasswordConfirmation/${email}`)
  }

  public changePassword(passwordData: ChangePasswordModel) : Observable<any> {
    return this.http.post(`${this.HOST}:${this.PORT}/api/users/changePassword`, passwordData);
  }

  public updateUser(userData: UpdateUser) : Observable<any> {
    return this.http.post(`${this.HOST}:${this.PORT}/api/users/updateUserData`, userData)
  }

  public getUserData() : Observable<any> {
    return this.http.get(`${this.HOST}:${this.PORT}/api/users/getUserData`);
  }

  public isAuthenticated() : boolean {
    let token;

    try {
      token = jwt_decode(localStorage.getItem(this.TokenKey));
      let expireDate = new Date(0);
      expireDate.setUTCSeconds(token.exp);
      let now = new Date();

      if (now > expireDate) {
        this.logout();
        return false;
      }
    } catch (error) {
      return false;
    }

    return !!localStorage.getItem(this.TokenKey);
  }

  public setSession(token: string) : void {
    localStorage.setItem(this.TokenKey, token);
  }

  public logout() : void {
    localStorage.removeItem(this.TokenKey);
  }

  public getToken() : string {
    return localStorage.getItem(this.TokenKey);
  }

  public isAdmin() : boolean {
    let token: any;
    
    try {
      token = jwt_decode(localStorage.getItem(this.TokenKey));
      return token.role === 'Admin';
    } catch (error) {
      return false;
    }
  }
}
