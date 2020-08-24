import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveGoodsComponent } from './have-goods.component';

describe('HaveGoodsComponent', () => {
  let component: HaveGoodsComponent;
  let fixture: ComponentFixture<HaveGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
