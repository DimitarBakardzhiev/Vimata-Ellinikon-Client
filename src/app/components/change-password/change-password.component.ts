import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordModel } from '../../models/change-password-model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  private changePasswordForm: FormGroup;
  private errorMessage: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {    
    this.changePasswordForm = new FormGroup({
      'oldPassword': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl('', [Validators.required])
    }, { validators: this.confirmedPassword })
  }

  get oldPassword() { return this.changePasswordForm.get('oldPassword'); }
  get password() { return this.changePasswordForm.get('password'); }
  get confirmPassword() { return this.changePasswordForm.get('confirmPassword'); }

  private confirmedPassword(formGroup: FormGroup) {
    let pass = formGroup.get('password').value;
    let confirmPass = formGroup.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true } 
  }

  changePassword() {
    this.authService.changePassword(this.changePasswordForm.value as ChangePasswordModel).subscribe(() => {
      this.router.navigate(['']);
    }, err => {
      switch ((err as HttpErrorResponse).status) {
        case 400:
          this.errorMessage = 'Въведени са невалидни данни! Паролата остава непроменена.';
          break;
        case 403:
          this.errorMessage = 'Въведената стара парола е грешна!';
          break;
        default:
          this.errorMessage = 'Възникна непозната грешна! Моля, свържете се с администратор!';
          break;
      }
    });
  }
}
