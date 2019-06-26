/**
 * This resolver is use to first fetch the data from server and then display it with the view.
 * It prevents user to see view without data.
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/**---------------------------------------------------------------------- */
import { EmployeeService } from '../employee.service';
import { EmployeeResolved } from '../employee.model';

@Injectable()
export class EditEmployeeResolver implements Resolve<EmployeeResolved>{

    constructor(private employeeService: EmployeeService) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<EmployeeResolved> {

        const id = route.paramMap.get('id');
        //This condition checks wheter the id is number or not.
        if (isNaN(+id)) {
            const errorMessage = `Employee id was not a number: ${id}`;
            return of({ employee: null, error: errorMessage });
        }

        return this.employeeService.getEmployee(+id)
            .pipe(
                map(emp => ({ employee: emp })),
                catchError(error => {
                    const errorMessage = `Retrival error: ${error}`;
                    return of({ employee: null, error: errorMessage });
                })
            );
    }
}