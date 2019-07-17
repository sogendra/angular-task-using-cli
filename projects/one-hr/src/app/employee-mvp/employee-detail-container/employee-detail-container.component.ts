import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-detail-container',
  templateUrl: './employee-detail-container.component.html',
  styleUrls: ['./employee-detail-container.component.css']
})
export class EmployeeDetailContainerComponent implements OnInit {

  private id: number;
  public employee$: Observable<Employee>;

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute) { 
     
    }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.employee$ = this.employeeService.getEmployee(this.id);
  }

  
}
