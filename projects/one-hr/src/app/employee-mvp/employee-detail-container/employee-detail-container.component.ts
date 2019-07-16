import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeListService } from '../employee-list.service';
import { Observable } from 'rxjs';
import { Employee } from '../../employee/employee.model';

@Component({
  selector: 'app-employee-detail-container',
  templateUrl: './employee-detail-container.component.html',
  styleUrls: ['./employee-detail-container.component.css']
})
export class EmployeeDetailContainerComponent implements OnInit {

  private id: number;

  constructor(private employeeListService: EmployeeListService,
    private activatedRoute: ActivatedRoute) { 
     
    }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  public employee$: Observable<Employee> = this.employeeListService.getEmployee(34);
}
