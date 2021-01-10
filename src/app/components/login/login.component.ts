import { Component, OnInit } from '@angular/core';

import { LoginModel } from '../../models/login-model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private errorMessage: string;
  private loginForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  private login() : void {
    this.authService.authenticate(this.loginForm.value as LoginModel).subscribe((data) => {
      this.authService.setSession(data.token);
      this.router.navigate(['']);
    }, error => {
      if (error.status === 0) {
        this.errorMessage = 'Възникна проблем при свързване със сървъра. Моля опитайте по-късно.'
      } else if (Math.floor(error.status / 100) === 4) {
        this.errorMessage = 'Грешен потребител или парола.'
      }
    });
  }
}
