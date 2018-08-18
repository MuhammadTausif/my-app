import { TestBed, inject } from '@angular/core/testing';

import { InMemoryData6Service } from './in-memory-data6.service';

describe('InMemoryData6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryData6Service]
    });
  });

  it('should be created', inject([InMemoryData6Service], (service: InMemoryData6Service) => {
    expect(service).toBeTruthy();
  }));
});
