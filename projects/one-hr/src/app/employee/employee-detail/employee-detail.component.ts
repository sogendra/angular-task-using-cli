/**
 * This component deals with the view page of Employee detail page.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**---------------------------------------------------------------------- */
import { Employee, EmployeeResolved } from '../employee.model';

@Component({
  selector: 'onehr-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  /**
   * Employee  of employee detail component
   */
  private employee: Employee;

  /**
   * Page title of employee detail component
   */
  private pageTitle: string;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pageTitle = 'Employee Detail'
    
    //Fetching employee's data using resolver with the help of ActivatedRoute.
    const resolvedEmployee: EmployeeResolved = this.activatedRoute.snapshot.data['resolvedEmployee'];
    this.employee = resolvedEmployee.employee;
  }

}
