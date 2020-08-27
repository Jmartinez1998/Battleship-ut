import { TestBed } from '@angular/core/testing';

import { ChargescriptsService } from './chargescripts.service';

describe('ChargescriptsService', () => {
  let service: ChargescriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargescriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
