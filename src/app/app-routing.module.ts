import { HomePageComponent } from './home-page/home-page.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
//import { UpdateStudentComponent } from './update-student/update-student.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';



const routes: Routes = [
  {
    path:'students',component:StudentListComponent
  },
  {
    path:'add', component:CreateStudentComponent
  },
  {
    path:'',redirectTo:'home-page',pathMatch:'full'
  },
  {
    path:'update/:studentId',component:UpdateStudentComponent
  },
  {
    path:'details/:studentId',component:StudentDetailsComponent
  },
  {
    path:'home-page',component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
