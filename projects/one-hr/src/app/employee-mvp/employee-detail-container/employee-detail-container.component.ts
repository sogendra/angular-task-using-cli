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

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute) { 
     
    }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  public employee$: Observable<Employee> = this.employeeService.getEmployee(26);
}
