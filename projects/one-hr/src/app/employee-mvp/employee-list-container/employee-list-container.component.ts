import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../employee-list.service';
import { Observable } from 'rxjs';
import { Employee } from '../../employee/employee.model';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.css']
})
export class EmployeeListContainerComponent implements OnInit {

  public employees$: Observable<Employee[]> = this.employeeListService.getAllEmployees();

  constructor(private employeeListService: EmployeeListService) { }

  ngOnInit() {  }

  public getCustomer(): void {
    this.employees$ = this.employeeListService.getAllEmployees();
  }

  public deleteEmployee(id) {
    this.employeeListService.deleteEmployee(id).subscribe(
      () => {
        console.log(id);
        this.getCustomer();
      }
    );
  }

}
