import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditEmployeeResolver } from './edit-employee/edit-employee-resolver.service';
import { EmployeeListResolver } from './employee-list/employee-list-resolver.service';
import { EditEmployeeGuard } from './edit-employee/edit-employee.guard';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CreateEmployeeGuard } from './create-employee/create-employee.guard';

const employeeRoutes: Routes = [
    {
        path: '',
        component: EmployeeListComponent,
        resolve: { resolvedEmployees: EmployeeListResolver }
    },
    {
        path: 'add',
        component: CreateEmployeeComponent,
        canDeactivate: [CreateEmployeeGuard]
    },
    {
        path: ':id',
        component: EmployeeDetailComponent,
        resolve: { resolvedEmployee: EditEmployeeResolver }
    },
    {
        path: ':id/edit',
        component: EditEmployeeComponent,
        canDeactivate: [EditEmployeeGuard],
        resolve: { resolvedEmployee: EditEmployeeResolver }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(employeeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeeRoutingModule { }