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
import { EditExerciseComponent } from './components/admin/exercises/edit-exercise/edit-exercise.component';
import { AdminGuard } from './infrastructure/admin.guard';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LessonTitleLessonRouteMapping } from './infrastructure/lesson-title-lesson-route-mapping';
import { LessonTitles } from './infrastructure/lesson-titles';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  { path: 'вход', component: LoginComponent },
  { path: 'регистрация', component: SignupComponent },
  { path: 'промяна-на-парола', component: ChangePasswordComponent },
  { path: 'забравена-парола', component: ResetPasswordComponent },
  { path: 'профил', component: UpdateUserComponent },

  { path: 'администрация' , component: AdministrationComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'администрация/ново-упражнение' , component: CreateExerciseComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'администрация/упражнения/редактиране' , component: EditExerciseComponent, canActivate: [AuthGuard, AdminGuard] },

  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Alphabet), component: AlphabetComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Reading), component: ReadingComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Greetings), component: GreetingsComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.VerbToBe), component: ToBeComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Expressions), component: ExpressionsComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Verbs1), component: VerbsComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.GenderAndArticles), component: GendersComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Reading2), component: ReadingPart2Component, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Accusative), component: AccusativeComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Verbs2), component: Verbs2Component, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Negation), component: NegationComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Numbers), component: NumbersComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Genitive), component: PossessivePronounsComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Clock), component: ClockComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.VerbExceptions), component: Verbs3Component, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Shopping), component: ShoppingComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Plural), component: PluralComponent, canActivate: [AuthGuard] },
  { path: LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Adjectives), component: AdjectivesComponent, canActivate: [AuthGuard] },

  { path: 'exercises', component: ExercisesComponent, canActivate: [AuthGuard] },
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
