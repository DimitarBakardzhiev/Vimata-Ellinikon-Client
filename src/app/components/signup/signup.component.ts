import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SignupModel } from '../../models/signup-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private userData: SignupModel = new SignupModel();

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  private signup() : void {
    this.authService.signup(this.userData).subscribe((data) => {
      console.log(data);
      this.authService.setSession(data.token);
      this.router.navigate(['']);
    }, (err) => {
      console.log(err);
    });
  }
}
