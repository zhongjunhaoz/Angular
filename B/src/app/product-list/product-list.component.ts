import { Component, OnInit } from '@angular/core';

import { products } from '../products'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;

  share () {
    window.alert('钟俊浩大帅比!')
  }

  onNotify() {
    window.alert('当产品上市会通知您！')
  }
}
