import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    DeleteByIdComponent,
    HomePageComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
