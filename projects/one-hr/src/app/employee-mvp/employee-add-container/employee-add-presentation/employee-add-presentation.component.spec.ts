import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddPresentationComponent } from './employee-add-presentation.component';

describe('EmployeeAddPresentationComponent', () => {
  let component: EmployeeAddPresentationComponent;
  let fixture: ComponentFixture<EmployeeAddPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
