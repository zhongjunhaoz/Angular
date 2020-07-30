import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmvComponent } from './topmv.component';

describe('TopmvComponent', () => {
  let component: TopmvComponent;
  let fixture: ComponentFixture<TopmvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
