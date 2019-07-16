import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.css']
})
export class EmployeeListContainerComponent implements OnInit {

  public employees$: Observable<Employee[]> = this.employeeService.getAllEmployees();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {  }

  public getCustomer(): void {
    this.employees$ = this.employeeService.getAllEmployees();
  }

  public deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        console.log(id);
        this.getCustomer();
      }
    );
  }

}
