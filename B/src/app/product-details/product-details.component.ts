import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void { //拿到productId后对整个products进行筛选，之后给this.product
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('你的产品已添加进购物车！' + this.product.name + this.product.price + this.product.description)
  }

}
