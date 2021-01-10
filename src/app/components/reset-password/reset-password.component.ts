import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private resetPasswordForm: FormGroup;
  private message: string;
  private errorMessage: string;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {    
    this.resetPasswordForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get email() { return this.resetPasswordForm.get('email'); }

  reset() {
    this.authService.resetPassword(this.resetPasswordForm.value['email']).subscribe(() => 
      this.message = 'Инструкции за възстановяване на паролата Ви са изпратени на посочения имейл адрес.',
      err => {
        switch ((err as HttpErrorResponse).status) {
          case 400:
            this.errorMessage = 'Не съществува потребител, който да съответства на въведения имейл адрес.';
            break;
          default:
            this.errorMessage = 'Възникна непозната грешна! Моля, свържете се с администратор!';
            break;
        }
      }
    )
  }
}
