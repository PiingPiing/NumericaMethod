import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezoidalRuleComponent } from './trapezoidal-rule.component';

describe('TrapezoidalRuleComponent', () => {
  let component: TrapezoidalRuleComponent;
  let fixture: ComponentFixture<TrapezoidalRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapezoidalRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapezoidalRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
