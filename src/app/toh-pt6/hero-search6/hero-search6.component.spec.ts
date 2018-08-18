import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearch6Component } from './hero-search6.component';

describe('HeroSearch6Component', () => {
  let component: HeroSearch6Component;
  let fixture: ComponentFixture<HeroSearch6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearch6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearch6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
