import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-header-input',
  templateUrl: './header-input.component.html',
  styleUrls: ['./header-input.component.styl']
})
export class HeaderInputComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor(private iconService: NzIconService) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_1096750_mjm5a8lb4ul.js'
    });
  }

  ngOnInit(): void {
  }

}
