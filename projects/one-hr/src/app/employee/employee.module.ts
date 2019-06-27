import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

// import { NgSelectModule } from '@ng-select/ng-select';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { EmployeeListResolver } from './employee-list/employee-list-resolver.service';
import { EditEmployeeResolver } from './edit-employee/edit-employee-resolver.service';

@NgModule({
  declarations: [
    EmployeeListComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    NgxPaginationModule
  ],
  providers: [
    EmployeeService,
    EmployeeListResolver,
    EditEmployeeResolver
  ]
})
export class EmployeeModule { 
}
