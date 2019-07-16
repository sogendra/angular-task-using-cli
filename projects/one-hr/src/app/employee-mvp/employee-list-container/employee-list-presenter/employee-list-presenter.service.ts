import { Injectable } from '@angular/core';
import { EmployeeListService } from '../../employee-list.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListPresenterService {

  constructor(private employeeListService: EmployeeListService) { }

  getAllEmployee() {
    this.employeeListService.getAllEmployees().subscribe();
  }
  
}
