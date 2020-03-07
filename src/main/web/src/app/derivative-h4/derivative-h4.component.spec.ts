import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeH4Component } from './derivative-h4.component';

describe('DerivativeH4Component', () => {
  let component: DerivativeH4Component;
  let fixture: ComponentFixture<DerivativeH4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivativeH4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivativeH4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
