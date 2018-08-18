import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  selectedStudent: Student;

  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void{
    this.studentService.getStudents()
    .subscribe(students => this.students = students);
  }

}
