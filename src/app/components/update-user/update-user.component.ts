import { Component, OnInit } from '@angular/core';
import { UpdateUser } from '../../models/update-user';
import { AuthService } from '../../services/auth.service';
import { BreadCrumb } from '../breadcrumb/bread-crumb';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user: UpdateUser = new UpdateUser();
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Профил', '/профил')];
  saved: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserData().subscribe(data => this.user = data);
  }

  submit() {
    this.authService.updateUser(this.user).subscribe(data => this.saved = true);
  }
}
