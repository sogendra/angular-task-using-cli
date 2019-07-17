import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Employee } from '../../employee.model';

function noValidator(control: AbstractControl): {[key: string]: boolean} | null{

  if(isNaN(control.value)){
      return {'no': true};
  }
  return null;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeEditPresenterService {

  public employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public buildForm(): FormGroup {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', [ Validators.required,Validators.minLength(3) ]],
      lastName: ['', [ Validators.required,Validators.minLength(3) ]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), noValidator]],
      qualification: [''],
      designation: [''],
      salary: ['',noValidator],
      languages:[''],
      uploadFile: [null]
    });

    return this.employeeForm;
  }

  public onFileChange(event): void {
    if (event.target.files && event.target.files[0].size/1024/1024 > 2) {
      const uploadFile = this.employeeForm.get('uploadFile');
      uploadFile.setErrors({'uploadFileValidation': true});
    }
  }

public setEmployeeFormData(employee: Employee): void {
  this.employeeForm.patchValue(employee);  
}
  
}
