import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'taobao-web-css';
  size: NzButtonSize = 'large';
  show = false;

  ngOnInit(): void {
    this.isShow();
  }

  isShow(){
    let that = this;
    window.addEventListener("scroll", function (e) {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t <= 250) {
        // alert('达到顶部，隐藏固定输搜索框');
        console.log('达到顶部，隐藏固定输搜索框')
        that.show = false;
      } else {
        console.log('显示固定搜索框')
        that.show = true;
      }
    })
  }
}
