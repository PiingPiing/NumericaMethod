import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeunsComponent } from './heuns.component';

describe('HeunsComponent', () => {
  let component: HeunsComponent;
  let fixture: ComponentFixture<HeunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
