import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsRuleComponent } from './simpsons-rule.component';

describe('SimpsonsRuleComponent', () => {
  let component: SimpsonsRuleComponent;
  let fixture: ComponentFixture<SimpsonsRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpsonsRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpsonsRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
