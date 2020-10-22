import { TestBed } from '@angular/core/testing';

import { NewServiceService } from './new-service.service';

describe('NewServiceService', () => {
  let service: NewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
