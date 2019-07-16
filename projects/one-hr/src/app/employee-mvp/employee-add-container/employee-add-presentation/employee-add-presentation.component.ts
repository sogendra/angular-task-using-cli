import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EmployeeEditPresenterService } from '../../employee-edit-container/employee-edit-presenter/employee-edit-presenter.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-add-presentation',
  templateUrl: './employee-add-presentation.component.html',
  styleUrls: ['./employee-add-presentation.component.css']
})
export class EmployeeAddPresentationComponent implements OnInit {

  public employeeForm: FormGroup;

  public saveClicked: boolean = false;

  public pageTitle = 'Add new Employee';

  @Input() public dropdownList: any[];

  @Output() public saveEmployee = new EventEmitter();

  constructor(private employeeEditPresenter: EmployeeEditPresenterService) { 
    
  }

  ngOnInit() {
    this.employeeForm = this.employeeEditPresenter.buildForm();
  }

  public onFileChange(event){
    const uploadFile = this.employeeForm.get('uploadFile');
    uploadFile.setErrors(this.employeeEditPresenter.onFileChange(event));
  }

  public createEmployee() {
    this.saveEmployee.emit(this.employeeForm.value);
  }

}
