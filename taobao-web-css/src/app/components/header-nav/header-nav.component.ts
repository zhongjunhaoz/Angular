import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.styl']
})
export class HeaderNavComponent implements OnInit {

  constructor(private iconService: NzIconService) {
    this.iconService.fetchFromIconfont({
      scriptUrl: '//at.alicdn.com/t/font_1096750_oenfxch5xbn.js'
    });
  }

  ngOnInit(): void {
  }

}
