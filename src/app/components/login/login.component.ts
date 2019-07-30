import { Component, OnInit } from '@angular/core';

import { LoginModel } from '../../models/login-model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userData: LoginModel;

  constructor(private authService: AuthService) {
    this.userData = new LoginModel();
  }

  ngOnInit() {
  }

  private login(): void {
    this.authService.authenticate(this.userData).subscribe((data) => {
      console.log(data);
    });
  }
}
