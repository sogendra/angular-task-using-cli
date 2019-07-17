import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeEditPresenterService } from '../employee-edit-presenter/employee-edit-presenter.service';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-edit-presentation',
  templateUrl: './employee-edit-presentation.component.html',
  styleUrls: ['./employee-edit-presentation.component.css']
})
export class EmployeeEditPresentationComponent implements OnInit {

  /**
   * Page title of edit employee component.
   */
  public pageTitle= 'Edit Employee';

  /**
   * Employee form of edit employee component.
   */
  public employeeForm: FormGroup;

  /**
   * Employee  of edit employee component.
   */
  public _employee: Employee;

  @Input() public set employee(value : Employee) {
    this._employee = value;
    if (value) {
      this.employeeEditPresenter.setEmployeeFormData(this.employee);
    }
  }
  
  
  public get employee() : Employee {
    return this._employee;
  }
  

  /**
   * Save clicked boolean used for helping in create employe guard to nevigate on save clicked.
   */
  public saveClicked: boolean = false;

  /**
   * Dropdown list of edit employee component.
   */
  public dropdownList: Array<any> = [];

  @Output() public update = new EventEmitter();

  constructor(private employeeEditPresenter: EmployeeEditPresenterService) { }

  ngOnInit() {
    this.employeeForm = this.employeeEditPresenter.buildForm();
    console.log(this._employee);
  }

  /**
   * This method is used to check the size of file on upload file field of create employee form.
   * @param event 
   */
  private onFileChange(event): void {
    this.employeeEditPresenter.onFileChange(event);
  }

 
  public updateEmployee() {
    this.update.emit({
      employeeFormValue: this.employeeForm.value,
      empId: this._employee.id
    });
  }

  public setFormData(): void {
    this.employeeEditPresenter.setEmployeeFormData(this._employee);
  }


}
