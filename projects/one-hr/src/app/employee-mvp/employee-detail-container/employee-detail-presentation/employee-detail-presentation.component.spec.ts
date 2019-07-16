import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailPresentationComponent } from './employee-detail-presentation.component';

describe('EmployeeDetailPresentationComponent', () => {
  let component: EmployeeDetailPresentationComponent;
  let fixture: ComponentFixture<EmployeeDetailPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
