import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rank2Component } from './rank2.component';

describe('Rank2Component', () => {
  let component: Rank2Component;
  let fixture: ComponentFixture<Rank2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rank2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rank2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
