import { TestBed } from '@angular/core/testing';

import { StepSecondService } from './step-second.service';

describe('StepSecondService', () => {
  let service: StepSecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepSecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
