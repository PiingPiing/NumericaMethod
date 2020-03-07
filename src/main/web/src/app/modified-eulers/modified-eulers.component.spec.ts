import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedEulersComponent } from './modified-eulers.component';

describe('ModifiedEulersComponent', () => {
  let component: ModifiedEulersComponent;
  let fixture: ComponentFixture<ModifiedEulersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiedEulersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiedEulersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
