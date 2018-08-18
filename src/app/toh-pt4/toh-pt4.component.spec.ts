import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohPt4Component } from './toh-pt4.component';

describe('TohPt4Component', () => {
  let component: TohPt4Component;
  let fixture: ComponentFixture<TohPt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohPt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohPt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
