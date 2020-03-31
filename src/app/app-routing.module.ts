import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './infrastructure/auth.guard';
import { AlphabetComponent } from './components/lessons/topics-all/alphabet/alphabet.component';
import { ExercisesComponent } from './components/lessons/exercises/exercises.component';
import { ReadingComponent } from './components/lessons/topics-all/reading/reading.component';
import { GreetingsComponent } from './components/lessons/topics-all/greetings/greetings.component';
import { ToBeComponent } from './components/lessons/topics-all/to-be/to-be.component';
import { ExpressionsComponent } from './components/lessons/topics-all/expressions/expressions.component';
import { GendersComponent } from './components/lessons/topics-all/genders/genders.component';
import { ReadingPart2Component } from './components/lessons/topics-all/reading-part2/reading-part2.component';
import { AccusativeComponent } from './components/lessons/topics-all/accusative/accusative.component';
import { VerbsComponent } from './components/lessons/topics-all/verbs/verbs.component';
import { Verbs2Component } from './components/lessons/topics-all/verbs2/verbs2.component';
import { NegationComponent } from './components/lessons/topics-all/negation/negation.component';
import { NumbersComponent } from './components/lessons/topics-all/numbers/numbers.component';
import { PossessivePronounsComponent } from './components/lessons/topics-all/possessive-pronouns/possessive-pronouns.component';
import { ClockComponent } from './components/lessons/topics-all/clock/clock.component';

const routes: Routes = [
  { path: 'вход', component: LoginComponent },
  { path: 'регистрация', component: SignupComponent },

  { path: 'азбука', component: AlphabetComponent, canActivate: [AuthGuard] },
  { path: 'четене', component: ReadingComponent, canActivate: [AuthGuard] },
  { path: 'поздрави', component: GreetingsComponent, canActivate: [AuthGuard] },
  { path: 'съм', component: ToBeComponent, canActivate: [AuthGuard] },
  { path: 'изрази', component: ExpressionsComponent, canActivate: [AuthGuard] },
  { path: 'спрежение-1', component: VerbsComponent, canActivate: [AuthGuard] },
  { path: 'родове', component: GendersComponent, canActivate: [AuthGuard] },
  { path: 'четене-2', component: ReadingPart2Component, canActivate: [AuthGuard] },
  { path: 'винителен-падеж', component: AccusativeComponent, canActivate: [AuthGuard] },
  { path: 'спрежение-2', component: Verbs2Component, canActivate: [AuthGuard] },
  { path: 'отрицание', component: NegationComponent, canActivate: [AuthGuard] },
  { path: 'числа', component: NumbersComponent, canActivate: [AuthGuard] },
  { path: 'притежание', component: PossessivePronounsComponent, canActivate: [AuthGuard] },
  { path: 'часовник', component: ClockComponent, canActivate: [AuthGuard] },

  { path: 'exercises', component: ExercisesComponent, canActivate: [AuthGuard] },
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
