import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EulersComponent } from './eulers.component';

describe('EulersComponent', () => {
  let component: EulersComponent;
  let fixture: ComponentFixture<EulersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EulersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EulersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
