import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../../employee/employee.model';
import { EmployeeListService } from '../../employee-list.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.css']
})
export class EmployeeListPresentationComponent implements OnInit {

  public pageTitle = "Employees";
  @Input() public employees: Employee[];

  @Output() public deleteEmployee = new EventEmitter();

  constructor(private employeeService: EmployeeListService) { }

  ngOnInit() {
  }

  public onDelete(id: number) {
    console.log(id);
    this.deleteEmployee.emit(id);
  }

}
