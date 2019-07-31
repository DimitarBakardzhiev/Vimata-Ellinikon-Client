import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SignupModel } from '../../models/signup-model';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private userData: SignupModel = new SignupModel();
  private errors: string[];


  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {}

  private signup() : void {
    this.authService.signup(this.userData).subscribe((data) => {
      console.log(data);
      this.authService.setSession(data.token);
      this.router.navigate(['']);
    }, (err) => {
      if ((err as HttpErrorResponse).status == 409) {
        this.errors.push('Въведеният имейл е използван вече.');
      }
    });
  }
}
