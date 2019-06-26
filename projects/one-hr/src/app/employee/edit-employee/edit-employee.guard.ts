/**
 * This service is used to ask user to save the changes or not at the time user try to nevigate without saving the changes.
 */
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/**---------------------------------------------------------------------- */
import { EditEmployeeComponent } from './edit-employee.component';

@Injectable({
    providedIn: 'root'
})
export class EditEmployeeGuard implements CanDeactivate<EditEmployeeComponent> {

    public canDeactivate(component: EditEmployeeComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if (component.employeeForm.dirty) {
            //If user clicks on save button at that time user should allow to navigate on list page.
            if (component.saveClicked) {
                return true;
            }
            return confirm(`Navigate away and lose all changes to ${component.employee.firstName}?`);
        }
        return true;

    }
}