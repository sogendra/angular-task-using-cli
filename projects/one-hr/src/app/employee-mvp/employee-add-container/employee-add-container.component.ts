import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../employee-list.service';
import { Observable } from 'rxjs';
import { Language } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add-container',
  templateUrl: './employee-add-container.component.html',
  styleUrls: ['./employee-add-container.component.css']
})
export class EmployeeAddContainerComponent implements OnInit {

  public dropDownListData$ : Observable<Language[]> = this.employeeService.getAllLanguages();

  constructor(private employeeService: EmployeeListService,
              private router: Router) { }

  ngOnInit() {
  }

  public createEmployee(employee): void {
    this.employeeService.createEmployee(employee).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/emp']);
      }
    );
  }

}
