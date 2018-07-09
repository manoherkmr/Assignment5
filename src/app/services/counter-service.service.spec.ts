import { TestBed, inject } from '@angular/core/testing';

import { CounterServiceService } from './counter-service.service';

describe('CounterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterServiceService]
    });
  });

  it('should be created', inject([CounterServiceService], (service: CounterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
