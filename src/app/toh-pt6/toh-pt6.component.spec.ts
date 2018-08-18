import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohPt6Component } from './toh-pt6.component';

describe('TohPt6Component', () => {
  let component: TohPt6Component;
  let fixture: ComponentFixture<TohPt6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohPt6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohPt6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
