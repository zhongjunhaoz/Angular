import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatboxComponent } from './floatbox.component';

describe('FloatboxComponent', () => {
  let component: FloatboxComponent;
  let fixture: ComponentFixture<FloatboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
