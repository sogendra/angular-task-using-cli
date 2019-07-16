import { TestBed } from '@angular/core/testing';

import { EmployeeEditPresenterService } from './employee-edit-presenter.service';

describe('EmployeeEditPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeEditPresenterService = TestBed.get(EmployeeEditPresenterService);
    expect(service).toBeTruthy();
  });
});
