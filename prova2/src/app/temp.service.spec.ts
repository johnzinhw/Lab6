import { TestBed } from '@angular/core/testing';

import { TempService } from './temp.service';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
