import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rank1Component } from './rank1.component';

describe('Rank1Component', () => {
  let component: Rank1Component;
  let fixture: ComponentFixture<Rank1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rank1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rank1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
