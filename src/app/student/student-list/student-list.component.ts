import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../../student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  //students: Observable<Student[]> | undefined;
  students: Student[] = [];
  original_list: Student[]=[];
  listFilter: string='';

  constructor(private studentService: StudentService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  filter_student(){
    if(this.listFilter){
      this.students=[];
      for(let s of this.original_list){
        if((''+ s.studentId).includes(this.listFilter) || 
        s.firstName.toLowerCase().includes(this.listFilter.toLowerCase()) || 
        s.lastName.toLowerCase().includes(this.listFilter.toLowerCase())){
          this.students.push(s)
        }
      }

    }
    else{
      this.students=this.original_list;
    }
  }
  reloadData() {
    this.studentService.getStudentsList().subscribe(data=>{
      this.students=data;
      this.original_list=data;
    });
    //this.students=this.studentService.getStudentsList();
  }
  deleteStudent(studentId:number){
    this.studentService.deleteStudent(studentId)  
    .subscribe(
      data=>{
        alert("Student deleted successfully");
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
  gotoaddstudent(){
    this.router.navigate(['/add']);
  }
  gotoStudentList() {
    this.router.navigate(['/students']);
}

}
