import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotgoodsComponent } from './hotgoods.component';

describe('HotgoodsComponent', () => {
  let component: HotgoodsComponent;
  let fixture: ComponentFixture<HotgoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotgoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
