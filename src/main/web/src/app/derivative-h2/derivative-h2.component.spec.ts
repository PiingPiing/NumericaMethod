import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeH2Component } from './derivative-h2.component';

describe('DerivativeH2Component', () => {
  let component: DerivativeH2Component;
  let fixture: ComponentFixture<DerivativeH2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivativeH2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivativeH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
