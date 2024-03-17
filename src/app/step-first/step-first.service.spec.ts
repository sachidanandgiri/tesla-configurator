import { TestBed } from '@angular/core/testing';

import { StepFirstService } from './step-first.service';

describe('StepFirstService', () => {
  let service: StepFirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepFirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
