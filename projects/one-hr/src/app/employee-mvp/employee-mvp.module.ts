import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEditContainerComponent } from './employee-edit-container/employee-edit-container.component';
import { EmployeeEditPresentationComponent } from './employee-edit-container/employee-edit-presentation/employee-edit-presentation.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailContainerComponent } from './employee-detail-container/employee-detail-container.component';
import { EmployeeDetailPresentationComponent } from './employee-detail-container/employee-detail-presentation/employee-detail-presentation.component';

// const routes: Routes = [
//   {
//     path:'',
//     component: EmployeeListContainerComponent
//   },
//   {
//     path:'edit',
//     component: EmployeeEditContainerComponent
//   }
// ];

@NgModule({
  declarations: [EmployeeListContainerComponent, EmployeeListPresentationComponent, EmployeeEditContainerComponent, EmployeeEditPresentationComponent, EmployeeDetailContainerComponent, EmployeeDetailPresentationComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgMultiSelectDropDownModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class EmployeeMvpModule { }
