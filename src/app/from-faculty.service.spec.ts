import { TestBed } from '@angular/core/testing';

import { FromFacultyService } from './from-faculty.service';

describe('FromFacultyService', () => {
  let service: FromFacultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FromFacultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
