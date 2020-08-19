import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  firstRouterName: String = '';
  secondRouterName: String = '';

  constructor(public service: StorageService,private router:Router) {  }

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle() {
    this.firstRouterName = this.service.ftitle;
    this.secondRouterName = this.service.stitle;
  }

  goRouter() {
    if(this.firstRouterName == '随手拍浏览'){
      this.router.navigate(['/home/photo']);
    } else if (this.firstRouterName == '随手拍受理'){
      this.router.navigate(['/home/orders']);
    } else {
      this.router.navigate(['/home/accmanagement']);
    }
  }

}
