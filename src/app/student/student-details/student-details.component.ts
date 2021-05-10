import { StudentService } from '../../student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentId:number=0;
  student:Student | undefined;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService:StudentService ) { }

  ngOnInit() {
    this.student=new Student(0,0,'','','',0,0,'','',0,new Date);
    this.studentId=this.route.snapshot.params['studentId'];

    this.studentService.getStudentById(this.studentId)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }
  gotoStudentList(){
    this.router.navigate(['/students']);
  }
  gotoaddstudent(){
    this.router.navigate(['/add']);
  }
  }


