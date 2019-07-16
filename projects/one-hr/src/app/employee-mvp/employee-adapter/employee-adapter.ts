import { Injectable } from '@angular/core';
import { Adapter } from 'projects/core/src/lib/adapter/adapter';
import { Employee } from '../employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeAdapter implements Adapter<Employee> {

    /**
     * toResponse
     */
    public toResponse(item: Employee): Employee {
        const employee: Employee = new Employee(
            item.id,
            item.firstName,
            item.lastName,
            item.email,
            item.phone,
            item.qualification,
            item.designation,
            item.salary,
            item.languages,
            item.uploadFile
        );
        return employee;
    }

    /**
     * toRequest
     */
    public toRequest(item: Employee): Employee {
        const employee: Employee = new Employee(
            item.id,
            item.firstName,
            item.lastName,
            item.email,
            item.phone,
            item.qualification,
            item.designation,
            item.salary,
            item.languages,
            item.uploadFile
        );
        return employee;
    }


}