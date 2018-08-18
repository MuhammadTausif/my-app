import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Messages4Component } from './messages4.component';

describe('Messages4Component', () => {
  let component: Messages4Component;
  let fixture: ComponentFixture<Messages4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Messages4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Messages4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
