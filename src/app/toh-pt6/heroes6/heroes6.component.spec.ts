import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroes6Component } from './heroes6.component';

describe('Heroes6Component', () => {
  let component: Heroes6Component;
  let fixture: ComponentFixture<Heroes6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heroes6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heroes6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
