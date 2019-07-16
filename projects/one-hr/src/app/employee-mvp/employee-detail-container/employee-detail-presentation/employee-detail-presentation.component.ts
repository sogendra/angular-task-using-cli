import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../employee/employee.model';

@Component({
  selector: 'app-employee-detail-presentation',
  templateUrl: './employee-detail-presentation.component.html',
  styleUrls: ['./employee-detail-presentation.component.css']
})
export class EmployeeDetailPresentationComponent implements OnInit {

  @Input() public employee: Employee;

  public pageTitle: string = "Employee Detail";

  constructor() { }

  ngOnInit() {
  }

}
