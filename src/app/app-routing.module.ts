import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './infrastructure/auth.guard';
import { TopicDetailsComponent } from './components/lessons/topic/topic-details/topic-details.component';

const routes: Routes = [
  { path: 'vhod', component: LoginComponent },
  { path: 'registratsiya', component: SignupComponent },
  { path: 'azbuka', component: TopicDetailsComponent },
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
