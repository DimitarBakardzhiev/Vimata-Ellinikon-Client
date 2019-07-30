import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SignupModel } from '../../models/signup-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private userData: SignupModel = new SignupModel();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  private signup() : void {
    this.authService.signup(this.userData).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}
