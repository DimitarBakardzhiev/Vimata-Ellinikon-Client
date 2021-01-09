import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TopicComponent } from './components/lessons/topic-box/topic-box.component';
import { AlphabetComponent } from './components/lessons/topics-all/alphabet/alphabet.component';
import { SpeakComponent } from './components/lessons/speak/speak.component';
import { SpeakerButtonComponent } from './components/lessons/speaker-button/speaker-button.component';
import { ExercisesComponent } from './components/lessons/exercises/exercises.component';
import { DidYouKnowComponent } from './components/did-you-know/did-you-know.component';

import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { OpenExerciseComponent } from './components/lessons/exercise-types/open-exercise/open-exercise.component';
import { ClosedExerciseComponent } from './components/lessons/exercise-types/closed-exercise/closed-exercise.component';
import { DragAndDropExerciseComponent } from './components/lessons/exercise-types/drag-and-drop-exercise/drag-and-drop-exercise.component';
import { SpeakingExerciseComponent } from './components/lessons/exercise-types/speaking-exercise/speaking-exercise.component';
import { ReadingComponent } from './components/lessons/topics-all/reading/reading.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { GreetingsComponent } from './components/lessons/topics-all/greetings/greetings.component';
import { ToBeComponent } from './components/lessons/topics-all/to-be/to-be.component';
import { ExpressionsComponent } from './components/lessons/topics-all/expressions/expressions.component';
import { GendersComponent } from './components/lessons/topics-all/genders/genders.component';
import { ReadingPart2Component } from './components/lessons/topics-all/reading-part2/reading-part2.component';
import { AccusativeComponent } from './components/lessons/topics-all/accusative/accusative.component';
import { VerbsComponent } from './components/lessons/topics-all/verbs/verbs.component';
import { Verbs2Component } from './components/lessons/topics-all/verbs2/verbs2.component';
import { NegationComponent } from './components/lessons/topics-all/negation/negation.component';
import { ChatBubbleComponent } from './components/lessons/chat-bubble/chat-bubble.component';
import { NumbersComponent } from './components/lessons/topics-all/numbers/numbers.component';
import { PossessivePronounsComponent } from './components/lessons/topics-all/possessive-pronouns/possessive-pronouns.component';
import { ClockComponent } from './components/lessons/topics-all/clock/clock.component';
import { Verbs3Component } from './components/lessons/topics-all/verbs3/verbs3.component';
import { ShoppingComponent } from './components/lessons/topics-all/shopping/shopping.component';
import { PluralComponent } from './components/lessons/topics-all/plural/plural.component';
import { AdjectivesComponent } from './components/lessons/topics-all/adjectives/adjectives.component';
import { AdministrationComponent } from './components/admin/administration/administration.component';
import { CreateExerciseComponent } from './components/admin/exercises/create-exercise/create-exercise.component';
import { from } from 'rxjs';
import { CreateClosedComponent } from './components/admin/exercises/create-closed/create-closed.component';
import { CreateOpenComponent } from './components/admin/exercises/create-open/create-open.component';
import { CreateDragAndDropComponent } from './components/admin/exercises/create-drag-and-drop/create-drag-and-drop.component';
import { CreateSpeakingComponent } from './components/admin/exercises/create-speaking/create-speaking.component';
import { EditExerciseComponent } from './components/admin/exercises/edit-exercise/edit-exercise.component';
import { ErrorBoxComponent } from './components/error-box/error-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExercisesButtonComponent } from './components/lessons/exercises-button/exercises-button.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

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
    SpeakingExerciseComponent,
    ReadingComponent,
    BreadcrumbComponent,
    GreetingsComponent,
    ToBeComponent,
    ExpressionsComponent,
    GendersComponent,
    ReadingPart2Component,
    AccusativeComponent,
    VerbsComponent,
    Verbs2Component,
    NegationComponent,
    ChatBubbleComponent,
    NumbersComponent,
    PossessivePronounsComponent,
    ClockComponent,
    Verbs3Component,
    ShoppingComponent,
    PluralComponent,
    AdjectivesComponent,
    AdministrationComponent,
    CreateExerciseComponent,
    CreateClosedComponent,
    CreateOpenComponent,
    CreateDragAndDropComponent,
    CreateSpeakingComponent,
    EditExerciseComponent,
    ErrorBoxComponent,
    ExercisesButtonComponent,
    ChangePasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
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
