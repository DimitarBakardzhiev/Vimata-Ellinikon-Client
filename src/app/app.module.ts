import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ClosedExerciseComponent } from './components/lessons/closed-exercise/closed-exercise.component';
import { TopicComponent } from './components/lessons/topic/topic.component';
import { CreateTopicComponent } from './components/lessons/topic/create-topic/create-topic.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ClosedExerciseComponent,
    TopicComponent,
    CreateTopicComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
