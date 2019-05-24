import { Injectable } from '@angular/core';    
import {HttpClient} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http';    
import { Observable } from 'rxjs';   
import { StudentVM } from '../student-vm';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  Url = 'http://localhost:57030/Api';

  constructor(private http:HttpClient) { }

  getStudent():Observable<StudentVM[]>    
  {    
    return this.http.get<StudentVM[]>(this.Url + '/student/AllEmployeeDetails');
  }  

  CreateStudent(OutletVM:StudentVM):Observable<StudentVM[]>    
  {    
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };    
    return this.http.post<StudentVM[]>(this.Url + '/student/InsertEmployeeDetails/', OutletVM, httpOptions)    
  }    

  DeleteStudent(StudentId:string):Observable<number>    
  {    
    return this.http.get<number>(this.Url + '/student/DeleteEmployeeDetails?Id='+StudentId);    
  }    

  getStudentById(StudentId: string): Observable<StudentVM> {    
    return this.http.get<StudentVM>(this.Url + '/student/GetEmployeeDetailsById?Id=' + StudentId);    
  }   

  updateEmployee(employee: StudentVM): Observable<StudentVM> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<StudentVM>(this.Url + '/student/UpdateEmployeeDetails/',  
    employee, httpOptions);  
  }  

}
