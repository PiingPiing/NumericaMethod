import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePointComponent } from './one-point.component';

describe('OnePointComponent', () => {
  let component: OnePointComponent;
  let fixture: ComponentFixture<OnePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
