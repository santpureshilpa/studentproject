import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
//import { UpdateStudentComponent } from './update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    //UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
