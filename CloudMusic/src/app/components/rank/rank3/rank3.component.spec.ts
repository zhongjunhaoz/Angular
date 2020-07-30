import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rank3Component } from './rank3.component';

describe('Rank3Component', () => {
  let component: Rank3Component;
  let fixture: ComponentFixture<Rank3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rank3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rank3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
