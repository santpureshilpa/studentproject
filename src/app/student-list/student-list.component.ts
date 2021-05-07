import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Observable<Student[]> | undefined;

  constructor(private studentService: StudentService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.students=this.studentService.getStudentsList();
  }
  deleteStudent(studentId:number){
    this.studentService.deleteStudent(studentId)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error=>console.log(error));

  }
  studentDetails(studentId:number){
    this.router.navigate(['details',studentId]);
  }
  updateStudent(studentId:number){
    this.router.navigate(['update',studentId]);
  }

}
