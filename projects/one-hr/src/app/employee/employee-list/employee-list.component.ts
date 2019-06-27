/**
 * This component deals with the view page of Employee list page.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
/**---------------------------------------------------------------------- */
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { ConfirmDialogModel, MatConfirmDialogComponent } from '../../mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'onehr-employeelist',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  /**
   * Page title of employee list component.
   */
  private pageTitle = "Employees";

  /**
   * Employees  of employee list component.
   */
  private employees: Employee[];

  /**
   * Search form of employee list component.
   */
  private searchForm: FormGroup;

  /**
   * Total records of employee list component for pagination.
   */
  private totalRec: number;

  /**
   * Page number for pagination
   */
  private page: number;
  
  /**
   * Items per page for pagination
   */
  private itemsPerPage: number;

  /**
   * Order to sort employee list
   */
  private order: string;

  /**
   * Sort field of employee list component
   */
  private sortField: string;

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit() {

    this.page = this.employeeService.page;
    this.itemsPerPage = this.employeeService.itemsPerPage;
    this.order = this.employeeService.order;
    this.sortField = this.employeeService.sortField;

    //Get all employee data using resolver
    this.getAllEmployees();

    //Setting total number of records for pagination 
    this.employeeService.getAllEmployees().subscribe(
      emp => {
        this.totalRec = emp.length;
        console.log(this.totalRec);
      }
    );

    //Creating search formGroup with require formControls.
    this.searchForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      designation: ['']
    });
  }

  /**
   * This method is used to get all employees using ActivatedRoute.
   */
  private getAllEmployees(): void {
    this.employees = this.activatedRoute.snapshot.data['resolvedEmployees'];
  }

  /**
   * This method is used to delete individual employee record.
   * @param id 
   */
  private deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        this.getAllEmployeeSortedAndPaginated(this.sortField, this.page);
      },
      error => console.log(error)
    );
  }

  /**
   * This method is used to chnage the sorting order on each click of sorting icon.
   * @param sortField 
   * @param order 
   */
  private changeSortingOrder(sortField: string, order: string): void {
    if (order == 'desc') {
      this.order = 'asc';
      this.getAllEmployeeSortedAndPaginated(sortField, this.page);
    }
    else {
      this.order = 'desc';
      this.getAllEmployeeSortedAndPaginated(sortField, this.page);
    }
  }

  /**
   * This method is use to get all employee sorted and paginated.
   * @param sortField 
   * @param newPage 
   */
  private getAllEmployeeSortedAndPaginated(sortField: string, newPage: number): void {
    this.sortField = sortField;
    this.page = newPage;
    this.employeeService.getAllEmployeeSortedAndPaginated(this.sortField, this.order, this.page, this.itemsPerPage).subscribe(
      data => {
        this.employees = data;
      }
    );

  }

  /**
   * This method calls on each page change event.
   * @param newPage
   */
  private pageChange(newPage: number): void {
    this.page = newPage;
    this.employeeService.getAllEmployeeSortedAndPaginated(this.sortField, this.order, this.page, this.itemsPerPage).subscribe(
      data => {
        this.employees = data;
      }
    );
  }

  /**
   * This method is use to fiter employees list.
   */
  private filterEmployee(): void {
    
    var jsonToSearch = {};
    
    if (this.searchForm.get('firstName').value)
      jsonToSearch['firstName'] = this.searchForm.get('firstName').value;

    if (this.searchForm.get('lastName').value)
      jsonToSearch['lastName'] = this.searchForm.get('lastName').value;

    if (this.searchForm.get('email').value)
      jsonToSearch['email'] = this.searchForm.get('email').value;

    if (this.searchForm.get('phone').value)
      jsonToSearch['phone'] = this.searchForm.get('phone').value;

    if (this.searchForm.get('designation').value)
      jsonToSearch['designation'] = this.searchForm.get('designation').value;

    this.employeeService.filterEmployee(jsonToSearch).subscribe(
      data => {
        this.employees = data;
      }
    )
  }

  public onDelete(id: number, firstName: string): void {
    const message = `Are you sure you want to delete ${firstName}'s record?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        console.log(id);
        this.deleteEmployee(id);
      }
    });
  }

}
