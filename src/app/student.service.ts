import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl="http://localhost:8080/api";
  constructor(private httpClient:HttpClient) { }

  public  getStudentsList():Observable<any>{
    return this.httpClient.get("http://localhost:8080/api/students");
  }
  public  getStudentById(studentId:number):Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/students/${studentId}`);
  }
  public deleteStudent(studentId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseUrl}/delete/${studentId}`,{responseType:'text'});
  }
  public updateStudent(student:Student,studentId:number):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${studentId}`, student);
  }
  public createStudent(student:Student):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/addStudentwithCourse`,student);
  }
  // public updateStudent(student:Student):Observable<Student>
  // {
  //   return this.httpClient.put<Student>(`${this.baseUrl}update/{studentId}`,student);
  // }
  
}