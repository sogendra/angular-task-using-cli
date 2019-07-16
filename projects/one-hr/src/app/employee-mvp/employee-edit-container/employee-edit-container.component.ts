import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../employee-list.service';
import { Observable } from 'rxjs';
import { Employee } from '../../employee/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit-container',
  templateUrl: './employee-edit-container.component.html',
  styleUrls: ['./employee-edit-container.component.css']
})
export class EmployeeEditContainerComponent implements OnInit {

  private id: number;

  constructor(private employeeListService: EmployeeListService,
              private activatedRoute: ActivatedRoute) { }

  

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
    // this.employeeListService.getEmployee(this.id).subscribe(
    //   data => {
    //     console.log(data);
        
    //   }
    // );
  }

  public employee$: Observable<Employee> = this.employeeListService.getEmployee(34);

  public updateEmployee(employee): void{
    this.employeeListService.updateEmployee(employee.employeeFormValue,employee.empId).subscribe(
      () => {
        console.log("Update container");
        
        // this.saveClicked = true;
        // this.router.navigate(['/emp']);
      }
    );
  }



}
