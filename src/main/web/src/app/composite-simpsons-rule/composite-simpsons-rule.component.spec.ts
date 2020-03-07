import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeSimpsonsRuleComponent } from './composite-simpsons-rule.component';

describe('CompositeSimpsonsRuleComponent', () => {
  let component: CompositeSimpsonsRuleComponent;
  let fixture: ComponentFixture<CompositeSimpsonsRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositeSimpsonsRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeSimpsonsRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
