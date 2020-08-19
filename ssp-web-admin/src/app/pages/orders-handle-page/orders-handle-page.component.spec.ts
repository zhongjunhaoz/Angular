import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHandlePageComponent } from './orders-handle-page.component';

describe('OrdersHandlePageComponent', () => {
  let component: OrdersHandlePageComponent;
  let fixture: ComponentFixture<OrdersHandlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersHandlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersHandlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
