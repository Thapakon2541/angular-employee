import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetialsComponent } from './employee-detials/employee-detials.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path: 'employee', component:EmployeeListComponent},
  {path: 'create-employee', component:CreateEmployeeComponent},
  {path: '', redirectTo:'employee',pathMatch:'full'},
  {path: 'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'employee-detials/:id',component:EmployeeDetialsComponent}

];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
