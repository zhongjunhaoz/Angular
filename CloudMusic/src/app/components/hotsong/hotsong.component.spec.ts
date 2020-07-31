import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotsongComponent } from './hotsong.component';

describe('HotsongComponent', () => {
  let component: HotsongComponent;
  let fixture: ComponentFixture<HotsongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotsongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
