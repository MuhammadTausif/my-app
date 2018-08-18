import { TestBed, inject } from '@angular/core/testing';

import { Message6Service } from './message6.service';

describe('Message6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Message6Service]
    });
  });

  it('should be created', inject([Message6Service], (service: Message6Service) => {
    expect(service).toBeTruthy();
  }));
});
