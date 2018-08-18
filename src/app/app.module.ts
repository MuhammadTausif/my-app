import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { Q1Component } from './practice/q1/q1.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ExamComponent } from './exam/exam.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TestProfileComponent } from './test-profile/test-profile.component';
import { StudentsComponent } from './students/students.component';
import { StudentService } from './services/student.service';
import { NgQuizComponent } from './ng-quiz/ng-quiz/ng-quiz.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { TohPt4Component } from './toh-pt4/toh-pt4.component';
import { Heroes4Component } from './toh-pt4/heroes4/heroes4.component';
import { HeroDetail4Component } from './toh-pt4/hero-detail4/hero-detail4.component';
import { Messages4Component } from './toh-pt4/messages4/messages4.component';
import { Message4Service } from './toh-pt4/message4.service';
import { Hero4Service } from './toh-pt4/hero4.service';
import { TohPt6Component } from './toh-pt6/toh-pt6.component';
import { Dashboard6Component } from './toh-pt6/dashboard6/dashboard6.component';
import { HeroDetail6Component } from './toh-pt6/hero-detail6/hero-detail6.component';
import { Heroes6Component } from './toh-pt6/heroes6/heroes6.component';
import { HeroSearch6Component } from './toh-pt6/hero-search6/hero-search6.component';
import { Messages6Component } from './toh-pt6/messages6/messages6.component';
import { PipesComponent } from './practice/pipes/pipes.component';
import { ExponentialStrengthPipe } from './practice/exponential-strength.pipe';
import { PComponent } from './p/p.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { FlyingHeroesComponent } from './practice/flying-heroes/flying-heroes.component';
import { TohPt9Component } from './example/toh-pt9/toh-pt9.component';



@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    Q1Component,
    QuizComponent,
    PageNotFoundComponent,
    HeroListComponent,
    CrisisListComponent,
    MessagesComponent,
    HeroesComponent,
    HeroDetailComponent,
    ExamComponent,
    StudentProfileComponent,
    TestProfileComponent,
    StudentsComponent,
    NgQuizComponent,
    CreateStudentComponent,
    TohPt4Component,
    Heroes4Component,
    HeroDetail4Component,
    Messages4Component,
    TohPt6Component,
    Dashboard6Component,
    HeroDetail6Component,
    Heroes6Component,
    HeroSearch6Component,
    Messages6Component,
    PipesComponent,
    ExponentialStrengthPipe,
    PComponent,
    FlyingHeroesPipe,
    FlyingHeroesComponent,
    TohPt9Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    StudentService,
    Message4Service,
    Hero4Service
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }