import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeTrapezoidalComponent } from './composite-trapezoidal.component';

describe('CompositeTrapezoidalComponent', () => {
  let component: CompositeTrapezoidalComponent;
  let fixture: ComponentFixture<CompositeTrapezoidalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositeTrapezoidalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeTrapezoidalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
