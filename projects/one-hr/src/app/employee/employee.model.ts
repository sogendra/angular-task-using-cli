/**
 * This is a employee model class.
 */
export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  qualification: string;
  designation: string;
  salary: number;
  languages: string[];
  uploadFile: string;
}

/**
 * This model class is used in resolver to bind an errors with employee class.
 */
export class EmployeeResolved {
  employee: Employee;
  error?: any;
}
