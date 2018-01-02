import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorDisplayComponent } from './exterior-display.component';

describe('ExteriorDisplayComponent', () => {
  let component: ExteriorDisplayComponent;
  let fixture: ComponentFixture<ExteriorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteriorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
