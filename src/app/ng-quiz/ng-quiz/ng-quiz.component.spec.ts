import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQuizComponent } from './ng-quiz.component';

describe('NgQuizComponent', () => {
  let component: NgQuizComponent;
  let fixture: ComponentFixture<NgQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
