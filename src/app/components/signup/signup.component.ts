import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SignupModel } from '../../models/signup-model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private errors: string[] = [];
  private signupForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl('', [Validators.required])
    }, { validators: this.confirmedPassword });
  }

  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }

  private signup() : void {
    this.authService.signup(this.signupForm.value as SignupModel).subscribe((data) => {
      this.authService.setSession(data.token);
      this.router.navigate(['']);
    }, (err) => {
      if ((err as HttpErrorResponse).status == 409) {
        this.errors.push('Въведеният имейл е използван вече.');
      } else if ((err as HttpErrorResponse).status == 400) {
        this.errors.push('Въведете валиден имейл и парола.');
      } else if ((err as HttpErrorResponse).status >= 500) {
        this.errors.push('Възникна проблем на сървъра.');
      } else {
        this.errors.push('Възникна непозната грешка. Свържете се с администратор.')
      }
    });
  }

  private confirmedPassword(formGroup: FormGroup) {
    let pass = formGroup.get('password').value;
    let confirmPass = formGroup.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true } 
  }
}