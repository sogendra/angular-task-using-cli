/**
 * This service is used to ask user to save the changes or not at the time user try to nevigate without saving the changes.
 */
import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
/**---------------------------------------------------------------------- */
import { CreateEmployeeComponent } from './create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeGuard
  implements CanDeactivate<CreateEmployeeComponent> {
  public canDeactivate(
    component: CreateEmployeeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | boolean | Promise<boolean> {
    if (component.employeeForm.dirty) {
      // If user clicks on save button at that time user should allow to navigate on list page.
      if (component.saveClicked) {
        return true;
      }
      return confirm('Navigate away and lose all changes to New Employee?');
    }
    return true;
  }
}
