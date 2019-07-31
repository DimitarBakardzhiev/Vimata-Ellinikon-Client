import { Component, OnInit } from '@angular/core';

import { LoginModel } from '../../models/login-model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userData: LoginModel;

  constructor(private authService: AuthService,
    private router: Router) {
    this.userData = new LoginModel();
  }

  ngOnInit() {
  }

  private login() : void {
    this.authService.authenticate(this.userData).subscribe((data) => {
      this.authService.setSession(data.token);
      this.router.navigate(['']);
    });
  }
}
