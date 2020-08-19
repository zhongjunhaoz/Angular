import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../service/storage.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  titleSee: String = '随手拍浏览';
  titleHandle : String = '随手拍受理';
  titleManage: String = '系统管理';

  constructor(private router:Router,public service: StorageService){}

  ngOnInit(): void {
    this.service.ftitle = this.titleSee;
    this.service.stitle = '随手拍'
  }

  goPhoto(e) {
    this.service.ftitle = this.titleSee;
    this.service.stitle = e.target.innerText
    // console.log(e.target.innerText)
    this.router.navigate(['/home/photo']);
  }
  goOrders(e) {
    this.service.ftitle = this.titleHandle;
    this.service.stitle = e.target.innerText
    this.router.navigate(['/home/orders']);
  }
  goOrderHandle(e) {
    this.service.ftitle = this.titleHandle;
    this.service.stitle = e.target.innerText
    this.router.navigate(['/home/ordershandle']);
  }
  goAccManagement(e) {
    this.service.ftitle = this.titleManage;
    this.service.stitle = e.target.innerText
    this.router.navigate(['/home/accmanagement']);
  }
  goPerOrgenize(e) {
    this.service.ftitle = this.titleManage;
    this.service.stitle = e.target.innerText
    this.router.navigate(['/home/perorganize']);
  }
  goRoleManagement(e) {
    this.service.ftitle = this.titleManage;
    this.service.stitle = e.target.innerText
    this.router.navigate(['/home/rolemanagement']);
  }
  goResourceManagement(e) {
    this.service.ftitle = this.titleManage;
    this.service.stitle = e.target.innerText
    this.router.navigate(['/home/resoursemanagement']);
  }
  goHandle(e) {
    this.service.ftitle = this.titleManage;
    this.service.stitle = e.target.innerText
    this.router.navigate(['/home/handle']);
  }
}
