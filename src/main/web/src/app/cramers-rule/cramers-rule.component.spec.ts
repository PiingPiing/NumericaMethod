import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CramersRuleComponent } from './cramers-rule.component';

describe('CramersRuleComponent', () => {
  let component: CramersRuleComponent;
  let fixture: ComponentFixture<CramersRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CramersRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CramersRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
