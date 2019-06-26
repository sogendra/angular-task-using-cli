/**
 * This resolver is use to first fetch the data from server and then display it with the view.
 * It prevents user to see view without data.
 */
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
/**---------------------------------------------------------------------- */
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolver implements Resolve<Employee[]> {
  private page: number;
  private itemsPerPage: number;
  private order: string;
  private sortField: string;

  constructor(private employeeService: EmployeeService) {
    this.page = this.employeeService.page;
    this.itemsPerPage = this.employeeService.itemsPerPage;
    this.order = this.employeeService.order;
    this.sortField = this.employeeService.sortField;
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee[]> {
    return this.employeeService.getAllEmployeeSortedAndPaginated(
      this.sortField,
      this.order,
      this.page,
      this.itemsPerPage
    );
  }
}
