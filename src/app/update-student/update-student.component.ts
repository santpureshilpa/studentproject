import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updateStudentForm=new FormGroup(
    {
     
      studentId:new FormControl('',Validators.required),
      courseId:new FormControl('',Validators.required),
      firstName:new FormControl('',[Validators.required,Validators.minLength(2)]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(2)]),
      emailId:new FormControl('',Validators.email),
      fatherEmailId:new FormControl('',Validators.email),
      dateOfBirth:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      semester:new FormControl('',[Validators.required,Validators.pattern("^[1-9]")]),
      mobileNumber:new FormControl('',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]),
      fatherMobileNumber:new FormControl('',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")])
      
      
    }

  )

  
 studentId:number=0;
  student:Student=new Student(0,0,'','','',0,0,'','',0,new Date);
  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService) { }

  ngOnInit():void{
    //this.student=new Student(0,'','','',0,0,'','',0,'');
    this.studentId=this.route.snapshot.params['studentId'];

    this.studentService.getStudentById(this.studentId).subscribe(data=>{
      console.log(data);
      this.student=data;
    },error=>console.log(error));
  }
  // updateStudent(){
  //   this.studentService.updateStudent(this.student,this.studentId)
  //   .subscribe(data=>{
  //     console.log(data);
  //     //this.student=new Student(0,'','','',0,0,'','',0,'');
  //   },error=>console.log(error));
  // }
  gotoStudentList(){
    this.router.navigate(['/students']);
  }

onSubmit(){
  //this.updateStudent();
  this.studentService.updateStudent(this.student,this.studentId).subscribe(data=>{
    alert("Student updated successfully");
    this.gotoStudentList();
  },error=>console.log(error));
 
}
get courseId(){
  return this.updateStudentForm.get('courseId')
}

get firstName(){
  return this.updateStudentForm.get('firstName')
}
get lastName(){
  return this.updateStudentForm.get('lastName')
}
 get emailId(){
   return this.updateStudentForm.get('emailId')
 }
 get fatherEmailId(){
   return this.updateStudentForm.get('fatherEmailId')
 }
 get dateOfBirth(){
    return this.updateStudentForm.get(' dateOfBirth')
 }
 get gender(){
  return this.updateStudentForm.get('gender')
}
get semester(){
  return this.updateStudentForm.get('semester')
}
get mobileNumber(){
  return this.updateStudentForm.get('mobileNumber')
}
get fatherMobileNumber(){
  return this.updateStudentForm.get('fatherMobileNumber')
}

}
