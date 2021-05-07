import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studentId:number=0;
  student:Student=new Student(0,'','','',0,0);
  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService) { }

  ngOnInit() {
    this.student=new Student(0,'','','',0,0);
    this.studentId=this.route.snapshot.params['studentId'];

    this.studentService.getStudentById(this.studentId)
    .subscribe(data=>{
      console.log(data)
      this.student=data;
    },error=>console.log(error));
  }
  updateStudent(){
    this.studentService.updateStudent(this.studentId)
    .subscribe(data=>{
      console.log(data);
      this.student=new Student(0,'','','',0,0);
    },error=>console.log(error));
  }
onSubmit(){
  this.updateStudent();
}
gotoStudentList(){
  this.router.navigate(['/stuents']);
}
}
