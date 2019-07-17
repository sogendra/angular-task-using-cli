import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee, Language } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private languageUrl: string = environment.languagesBaseUrl;
  private baseUrl: string = environment.employeeBaseUrl;

  constructor(private http: HttpClient) { }

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
    console.log("Service: "+id);
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
     * This method is use to fetch all languages from server using HttpClient.
     */
    public getAllLanguages(): Observable<Language[]> {
      return this.http.get<Language[]>(this.languageUrl);
  }

}
