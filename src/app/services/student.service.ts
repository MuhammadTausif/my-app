import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable } from 'rxjs/Observable';
import { STUDENTS } from '../mock-students';
import { of } from 'rxjs/observable/of';

@Injectable()
export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]>{
    return of(STUDENTS);
  }
  
}
