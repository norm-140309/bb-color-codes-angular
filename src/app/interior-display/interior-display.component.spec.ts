import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDisplayComponent } from './interior-display.component';

describe('InteriorDisplayComponent', () => {
  let component: InteriorDisplayComponent;
  let fixture: ComponentFixture<InteriorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
