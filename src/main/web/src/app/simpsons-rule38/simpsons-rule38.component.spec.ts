import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsRule38Component } from './simpsons-rule38.component';

describe('SimpsonsRule38Component', () => {
  let component: SimpsonsRule38Component;
  let fixture: ComponentFixture<SimpsonsRule38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpsonsRule38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpsonsRule38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
