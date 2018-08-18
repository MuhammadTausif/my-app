import { TestBed, inject } from '@angular/core/testing';

import { Hero6Service } from './hero6.service';

describe('Hero6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hero6Service]
    });
  });

  it('should be created', inject([Hero6Service], (service: Hero6Service) => {
    expect(service).toBeTruthy();
  }));
});
