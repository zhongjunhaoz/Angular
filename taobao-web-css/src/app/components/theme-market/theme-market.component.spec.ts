import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMarketComponent } from './theme-market.component';

describe('ThemeMarketComponent', () => {
  let component: ThemeMarketComponent;
  let fixture: ComponentFixture<ThemeMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
