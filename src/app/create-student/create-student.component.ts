import { StudentService } from './../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  
  addStudentForm=new FormGroup(
    {

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
    student:Student=new Student(0,0,'','','',0,0,'','',0,new Date);
   submitted=false;
    
  

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit():void {
  }
  // newStudent():void{
  //   this.submitted=true;
  //   this.student=new Student(0,0,'','','',0,0,'','',0,'');
  // }
  saveStudent() {
    this.studentService.createStudent(this.student).subscribe(data => {
      alert("Student created successfully");
      console.log(data)
      //this.student=new Student(0,0,'','','',0,0,'','',0,'');
      
      this.gotoStudentList();
    },
      error=>console.log(error));
     
  }
  gotoStudentList() {
    this.router.navigate(['/students']);
}
  onSubmit(){
   console.warn(this.addStudentForm.value)
   this.saveStudent()
  //  this.addStudentForm.reset();
  //  this.gotoStudentList();
  }
  get firstName(){
    return this.addStudentForm.get('firstName')
  }
  get lastName(){
    return this.addStudentForm.get('lastName')
  }
   get emailId(){
     return this.addStudentForm.get('emailId')
   }
   get fatherEmailId(){
     return this.addStudentForm.get('fatherEmailId')
   }
   get dateOfBirth(){
     return this.addStudentForm.get('dateOfBirth')
   }
   get gender(){
    return this.addStudentForm.get('gender')
  }
  get semester(){
    return this.addStudentForm.get('semester')
  }
  get mobileNumber(){
    return this.addStudentForm.get('mobileNumber')
  }
  get fatherMobileNumber(){
    return this.addStudentForm.get('fatherMobileNumber')
  }
}
  

