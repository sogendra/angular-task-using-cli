/**
 * This component deals with the view page of Edit Employee page.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
/**---------------------------------------------------------------------- */
import { LanguageService } from '../language-dropdown/language.service';
import { Employee, EmployeeResolved } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { noValidator } from '../validation';

@Component({
  selector: 'onehr-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  /**
   * Employee form of edit employee component.
   */
  public employeeForm: FormGroup;

  /**
   * Employee  of edit employee component.
   */
  public employee: Employee;

  /**
   * Save clicked boolean used for helping in create employe guard to nevigate on save clicked.
   */
  public saveClicked: boolean = false;

  /**
   * Page title of edit employee component.
   */
  public pageTitle= 'Edit Employee';

  /**
   * Dropdown list of edit employee component.
   */
  public dropdownList: Array<any> = [];

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private languageService: LanguageService) { }

  ngOnInit() {
    
    //Fetching languages dropdown data from the server.
    this.languagesData();

    //Creating employee formGroup with require formControls.
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

    //Fetching edit form data using resolver with the help of ActivatedRoute.
    const resolvedEmployee: EmployeeResolved = this.activatedRoute.snapshot.data['resolvedEmployee'];
    this.employee = resolvedEmployee.employee;

    //Setting form data
    this.setEmployeeFormData();
  }

  /**
   * This method is used to get languages multiselect dropdown data.
   */
  private languagesData(): void {
    this.languageService.getAllLanguages().subscribe(
      data => {
        const arry: any = [];
        for(let d of data) {
          arry.push(d.language);
        }
        this.dropdownList = arry;
      }
    );
  }

  /**
   * This method is used to check the size of file on upload file field of create employee form.
   * @param event 
   */
  private onFileChange(event): void {
    if (event.target.files && event.target.files[0].size/1024/1024 > 2) {
      const uploadFile = this.employeeForm.get('uploadFile');
      uploadFile.setErrors({'uploadFileValidation': true});
    }
  }

  /**
   * This method is used to set edit employee form data.
   */
  private setEmployeeFormData(): void {
        this.employeeForm.patchValue({
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        email: this.employee.email,
        phone: this.employee.phone,
        qualification: this.employee.qualification,
        designation: this.employee.designation,
        languages:this.employee.languages,
        salary: this.employee.salary
      });  
  }

  /**
   * This method is used to update employee.
   */
  private updateEmployee(): void{
    this.employeeService.updateEmployee(this.employeeForm.value,this.employee.id).subscribe(
      () => {
        this.saveClicked = true;
        this.router.navigate(['/emp']);
      }
    );
  }

}
