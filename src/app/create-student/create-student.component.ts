import { StudentService } from './../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
    student:Student=new Student(0,'','','',0,0);
    submitted=false;
    //this.student=new Student();
  

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
  }
  newStudent():void{
    this.submitted=true;
    this.student=new Student(0,'','','',0,0);
  }
  saveStudent() {
    this.studentService.createStudent(this.student).subscribe(data => {
      console.log(data)
      this.student=new Student(0,'','','',0,0);
      this.gotoStudentList();
    },
      error=>console.log(error));
     
  }
  onsubmit(){
    this.submitted=true;
      this.saveStudent();
  }
    gotoStudentList() {
        this.router.navigate(['/students']);
    }
}
  

