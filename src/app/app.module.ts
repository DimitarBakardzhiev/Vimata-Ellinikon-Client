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
import { OpenExerciseComponent } from './components/lessons/open-exercise/open-exercise.component';
import { TopicComponent } from './components/lessons/topic/topic.component';
import { AlphabetComponent } from './components/lessons/topic/alphabet/alphabet.component';
import { SpeakComponent } from './components/lessons/topic/speak/speak.component';
import { ClosedExerciseComponent } from './components/lessons/closed-exercise/closed-exercise.component';
import { DragAndDropExerciseComponent } from './components/lessons/drag-and-drop-exercise/drag-and-drop-exercise.component';
import { SpeakerButtonComponent } from './components/lessons/speaker-button/speaker-button.component';
import { ExercisesComponent } from './components/lessons/exercises/exercises.component';
import { DidYouKnowComponent } from './components/did-you-know/did-you-know.component';

import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { SpeakingExerciseComponent } from './components/lessons/speaking-exercise/speaking-exercise.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    OpenExerciseComponent,
    TopicComponent,
    AlphabetComponent,
    SpeakComponent,
    ClosedExerciseComponent,
    DragAndDropExerciseComponent,
    SpeakerButtonComponent,
    ExercisesComponent,
    DidYouKnowComponent,
    ResultBoxComponent,
    SpeakingExerciseComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule
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
