import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccManagementPageComponent } from './acc-management-page.component';

describe('AccManagementPageComponent', () => {
  let component: AccManagementPageComponent;
  let fixture: ComponentFixture<AccManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
