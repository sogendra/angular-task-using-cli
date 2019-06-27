/**
 * This service class is used to perform crud operations on employee.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**---------------------------------------------------------------------- */
import { Employee } from './employee.model';
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {
  
  public page: number;
  public itemsPerPage: number;
  public order: string;
  public sortField: string;

  private baseUrl: string = environment.employeeBaseUrl;

  constructor(private http: HttpClient) {
    this.page = 1;
    this.itemsPerPage = 5;
    this.order = 'asc';
    this.sortField = 'firstName';
  }

  /**
   * This method is use to get all employees.
   */
  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  /**
   * This method is use to create new employee.
   * @param employee
   */
  public createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  /**
   * This method is use to get employee by id.
   * @param id
   */
  public getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  /**
   * This method is use to delete individual employee record.
   * @param id
   */
  public deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * This method is use to update employee data.
   * @param employee
   * @param id
   */
  public updateEmployee(employee: Employee, id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, employee);
  }

  /**
   * This method is use to filter employee list.
   * @param search
   */
  public filterEmployee(search: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl, { params: search });
  }

  /**
   * This method is use to get sorted and paginated employee list.
   * @param sortField
   * @param order
   * @param pageNumber
   * @param iteamsPerPage
   */
  public getAllEmployeeSortedAndPaginated(
    sortField: string,
    order: string,
    pageNumber: number,
    iteamsPerPage: number
  ): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl, {
      params: {
        _page: pageNumber.toString(),
        _limit: iteamsPerPage.toString(),
        _sort: sortField,
        _order: order
      }
    });
  }
}
