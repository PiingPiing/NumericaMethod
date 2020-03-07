import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaussQuadratureComponent } from './gauss-quadrature.component';

describe('GaussQuadratureComponent', () => {
  let component: GaussQuadratureComponent;
  let fixture: ComponentFixture<GaussQuadratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaussQuadratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaussQuadratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
