import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit-container',
  templateUrl: './employee-edit-container.component.html',
  styleUrls: ['./employee-edit-container.component.css']
})
export class EmployeeEditContainerComponent implements OnInit {

  private id: number;
  public employee$: Observable<Employee>;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.employee$ = this.employeeService.getEmployee(this.id);
  }

  public updateEmployee(employee): void {
    this.employeeService.updateEmployee(employee.employeeFormValue,employee.empId).subscribe(
      () => {
        this.router.navigate(['/emp']);
      }
    );
  }



}
