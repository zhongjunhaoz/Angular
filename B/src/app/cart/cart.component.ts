import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm; //存储表单模型

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.log('你的订单早已提交',customerData)
  }

}
//点击添加进购物车，之后触发事件addToCart(),这个事件是将商品信息添加进items数组。
// 在购物车页面，初始化的时候就获取道到了items数组，之后再将items循环打出来就行 。

// 在这个过程中，cart.service.ts的作用是 提供公共的方法，可以将这个文件放置公共的js
// 文件夹中。其他组件访问的方式是 import导入 ，construction中声明 ， 
// 再通过 this.导入的名称.具体方法 调用。