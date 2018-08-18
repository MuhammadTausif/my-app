import { TestBed, inject } from '@angular/core/testing';

import { Hero4Service } from './hero4.service';

describe('Hero4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hero4Service]
    });
  });

  it('should be created', inject([Hero4Service], (service: Hero4Service) => {
    expect(service).toBeTruthy();
  }));
});
