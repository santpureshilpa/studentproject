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
  public  getStudentById(studentId:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/api/students/{studentId}"+studentId);
  }
  public deleteStudent(studentId:number):Observable<any>
  {
    return this.httpClient.delete(`${this.baseUrl}/delete/{studentId}`+studentId);
  }
  public updateStudent(studentId:number):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/{studentId}`, studentId);
  }
  public createStudent(student:Student):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/students/{courseId}`,student);
  }
  // public updateStudent(student:Student):Observable<Student>
  // {
  //   return this.httpClient.put<Student>(`${this.baseUrl}update/{studentId}`,student);
  // }
  
}