import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagePageComponent } from './resource-manage-page.component';

describe('ResourceManagePageComponent', () => {
  let component: ResourceManagePageComponent;
  let fixture: ComponentFixture<ResourceManagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
