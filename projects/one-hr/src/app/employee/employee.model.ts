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

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    qualification: string,
    designation: string,
    salary: number,
    languages: string[],
    uploadFile: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.qualification = qualification;
    this.designation = designation;
    this.salary = salary;
    this.languages = languages;
    this.uploadFile = uploadFile;
  }
}

/**
 * This model class is used in resolver to bind an errors with employee class.
 */
export class EmployeeResolved {
  employee: Employee;
  error?: any;
}
