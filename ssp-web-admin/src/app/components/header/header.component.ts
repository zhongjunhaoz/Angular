import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NzModalService ,private router:Router) { }

  ngOnInit(): void {
  }
  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: '退出确认',
      nzContent: '确认要退出登陆吗？',
      nzOkText: '确认',
      nzCancelText: '取消',
      nzOnOk: () =>{
        this.router.navigate(['']);
      }
    });
  }
  goHome() {
    this.router.navigate(['/home']);
  }
}
