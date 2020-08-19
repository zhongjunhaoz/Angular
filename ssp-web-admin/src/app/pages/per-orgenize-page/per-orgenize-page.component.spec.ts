import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerOrgenizePageComponent } from './per-orgenize-page.component';

describe('PerOrgenizePageComponent', () => {
  let component: PerOrgenizePageComponent;
  let fixture: ComponentFixture<PerOrgenizePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerOrgenizePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerOrgenizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
