import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rank0Component } from './rank0.component';

describe('Rank0Component', () => {
  let component: Rank0Component;
  let fixture: ComponentFixture<Rank0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rank0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rank0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
