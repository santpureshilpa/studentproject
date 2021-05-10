
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';



@NgModule({
  declarations: [
    StudentListComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    DeleteByIdComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule
  ],
  exports:[
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    HomePageComponent

  ]
})
export class StudentModule {
  
 }
