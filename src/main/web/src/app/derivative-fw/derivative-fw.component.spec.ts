import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeFwComponent } from './derivative-fw.component';

describe('DerivativeFwComponent', () => {
  let component: DerivativeFwComponent;
  let fixture: ComponentFixture<DerivativeFwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivativeFwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivativeFwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
