import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExamComponent } from './exam/exam.component';
import { StudentsComponent } from './students/students.component';
import { NgQuizComponent } from './ng-quiz/ng-quiz/ng-quiz.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { TohPt4Component } from './toh-pt4/toh-pt4.component';
import { TohPt6Component } from './toh-pt6/toh-pt6.component';
import { PipesComponent } from './practice/pipes/pipes.component';
import { FlyingHeroesComponent } from './practice/flying-heroes/flying-heroes.component';


const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroListComponent },
  { path: 'exam', component: ExamComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'create-student', component: CreateStudentComponent},
  { path: 'ng-quiz', component: NgQuizComponent},
  { path: 'toh-pt4', component: TohPt4Component},
  { path: 'toh-pt6', component: TohPt6Component},
  { path: 'pipes', component: PipesComponent},
  { path: 'flying-hero', component: FlyingHeroesComponent},
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}