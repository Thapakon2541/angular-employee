import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[];

  constructor(private employeeService:EmployeeService,
    private router :Router
    ) { }

  ngOnInit(): void {

    this.getEmployees();
    
    // this.employees=[{
    //   "id":1,
    //   "firstName":"peen",
    //   "lastName":"TK",
    //   "emailId":"peen@mail.com"
    // }]
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id])
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees = data;
    })
  }
  detialsEmployee(id:number){
    this.router.navigate(['employee-detials',id])
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data)
      this.getEmployees();
    })
  }

}