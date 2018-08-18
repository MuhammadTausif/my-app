import { TestBed, inject } from '@angular/core/testing';

import { Message4Service } from './message4.service';

describe('Message4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Message4Service]
    });
  });

  it('should be created', inject([Message4Service], (service: Message4Service) => {
    expect(service).toBeTruthy();
  }));
});
