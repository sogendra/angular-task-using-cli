import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  public buildForm(): FormGroup {
    return this.formBuilder.group({
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
  }

  public onFileChange(event): any {
    if (event.target.files && event.target.files[0].size/1024/1024 > 2) {
      return {'uploadFileValidation': true};
    }
  }
  
}
