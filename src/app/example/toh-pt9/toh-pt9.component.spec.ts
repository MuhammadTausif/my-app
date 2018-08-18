import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohPt9Component } from './toh-pt9.component';

describe('TohPt9Component', () => {
  let component: TohPt9Component;
  let fixture: ComponentFixture<TohPt9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohPt9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohPt9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
