import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  id:number;
  employee : Employee = new Employee();
  constructor(private employeeService:EmployeeService
    ,private route:ActivatedRoute,private router:Router
    ) { }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'] // route path by ID  รับค่า id จาก route เก็บใน this.id
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{ // นำthis.id ส่งไปยัง service เพื่อเรีกยข้อมูล จากนั้น นำมาFetch ข้อมูล ใส่ในตัวแปร data 
      this.employee = data;
    },error => console.log(error))

  }
 
  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.goToEmployeeList()
    })
  }
  goToEmployeeList(){
    this.router.navigate(['/employee']);
  }
}
