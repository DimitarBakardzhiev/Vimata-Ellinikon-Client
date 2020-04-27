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
import { Verbs3Component } from './components/lessons/topics-all/verbs3/verbs3.component';
import { ShoppingComponent } from './components/lessons/topics-all/shopping/shopping.component';
import { PluralComponent } from './components/lessons/topics-all/plural/plural.component';
import { AdjectivesComponent } from './components/lessons/topics-all/adjectives/adjectives.component';
import { AdministrationComponent } from './components/admin/administration/administration.component';
import { CreateExerciseComponent } from './components/admin/exercises/create-exercise/create-exercise.component';

const routes: Routes = [
  { path: 'вход', component: LoginComponent },
  { path: 'регистрация', component: SignupComponent },

  { path: 'администрация' , component: AdministrationComponent },
  { path: 'администрация/ново-упражнение' , component: CreateExerciseComponent },

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
  { path: 'глаголи-изключения', component: Verbs3Component, canActivate: [AuthGuard] },
  { path: 'на-пазар', component: ShoppingComponent, canActivate: [AuthGuard] },
  { path: 'множествено-число', component: PluralComponent, canActivate: [AuthGuard] },
  { path: 'прилагателни', component: AdjectivesComponent, canActivate: [AuthGuard] },

  { path: 'exercises', component: ExercisesComponent, canActivate: [AuthGuard] },
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
