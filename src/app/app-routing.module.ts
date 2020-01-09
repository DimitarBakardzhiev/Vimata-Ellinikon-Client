import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './infrastructure/auth.guard';
import { CreateTopicComponent } from './components/lessons/topic/create-topic/create-topic.component';
import { TopicDetailsComponent } from './components/lessons/topic/topic-details/topic-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'topic/create', component: CreateTopicComponent },
  { path: 'topic/details', component: TopicDetailsComponent },
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
