import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-theme-market',
  templateUrl: './theme-market.component.html',
  styleUrls: ['./theme-market.component.styl']
})
export class ThemeMarketComponent implements OnInit {

  constructor(private iconService: NzIconService) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_1096750_ek5lhf2pwua.js'
    });
  }

  arrayImg1 = [
    'https://img.alicdn.com/simba/img/TB1h.u.GYj1gK0jSZFOSuw7GpXa.jpg',
    'https://img.alicdn.com/simba/img/TB1kaU6NrY1gK0jSZTESutDQVXa.jpg',
    'https://img.alicdn.com/tfs/TB1cxAyRXY7gK0jSZKzXXaikpXa-520-280.jpg_q90_.webp',
  ]

  arrayImg = ['https://img.alicdn.com/simba/img/TB1tNHCRGL7gK0jSZFBSutZZpXa.jpg',
    'https://img.alicdn.com/tfs/TB1cxAyRXY7gK0jSZKzXXaikpXa-520-280.jpg_q90_.webp',
    'https://img.alicdn.com/simba/img/TB1kaU6NrY1gK0jSZTESutDQVXa.jpg',
    'https://img.alicdn.com/simba/img/TB1h.u.GYj1gK0jSZFOSuw7GpXa.jpg'];
  

  ngOnInit(): void {
  }

}
