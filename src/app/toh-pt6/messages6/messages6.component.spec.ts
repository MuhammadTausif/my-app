import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Messages6Component } from './messages6.component';

describe('Messages6Component', () => {
  let component: Messages6Component;
  let fixture: ComponentFixture<Messages6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Messages6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Messages6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
