import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rank4Component } from './rank4.component';

describe('Rank4Component', () => {
  let component: Rank4Component;
  let fixture: ComponentFixture<Rank4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rank4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rank4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
