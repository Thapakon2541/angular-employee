import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL ="http://localhost:9090/api/v1/employees";
  constructor(private httpClient:HttpClient) { }

  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }
  createEmployee(employee):Observable<Object>{
    return this.httpClient.post<Employee>(`${this.baseURL}`,employee)

  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }
  updateEmployee(id:number,emploee:Employee):Observable<Object>{
    return this.httpClient.put<Employee>(`${this.baseURL}/${id}`,emploee)

  }
  deleteEmployee(id:number):Observable<Object>{
    return  this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
