/**
 * This component deals with the view page of Add new Employee page.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/**---------------------------------------------------------------------- */
import { LanguageService } from '../language-dropdown/language.service';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'onehr-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  /**
   * Employee form of create employee component.
   */
  public employeeForm: FormGroup;

  /**
   * Save clicked boolean used for helping in create employe guard to nevigate on save clicked.
   */
  public saveClicked: boolean = false;

  /**
   * Page title of create employee component.
   */
  public pageTitle = 'Add new Employee';

  /**
   * Employee of create employee component.
   */
  private employee: Employee;

  /**
   * Dropdown list of create employee component.
   */
  public dropdownList: any[];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    //Fetching languages dropdown data from the server.
    this.languagesData();

    //Creating employee formGroup with require formControls.
    this.employeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      qualification: [''],
      designation: [''],
      salary: [''],
      languages: [''],
      uploadFile: [null]
    });
  }

  /**
   * This method is used to get languages multiselect dropdown data.
   */
  private languagesData(): void {
    this.languageService.getAllLanguages().subscribe(data => {
      const arry: any = [];
      for (let d of data) {
        arry.push(d.language);
      }
      this.dropdownList = arry;
    });
  }

  /**
   * This method is used to check the size of file on upload file field of create employee form.
   * @param event
   */
  private onFileChange(event): void {
    if (event.target.files && event.target.files[0].size / 1024 / 1024 > 2) {
      const uploadFile = this.employeeForm.get('uploadFile');
      uploadFile.setErrors({ uploadFileValidation: true });
    }
  }

  /**
   * This method is used to create employee.
   */
  private createEmployee(): void {
    this.employeeService
      .createEmployee(this.employeeForm.value)
      .subscribe(emp => {
        this.employee = emp;
        this.saveClicked = true;
        this.router.navigate(['/emp']);
      });
  }
}
