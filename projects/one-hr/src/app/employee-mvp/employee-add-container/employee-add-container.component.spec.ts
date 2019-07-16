import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddContainerComponent } from './employee-add-container.component';

describe('EmployeeAddContainerComponent', () => {
  let component: EmployeeAddContainerComponent;
  let fixture: ComponentFixture<EmployeeAddContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
