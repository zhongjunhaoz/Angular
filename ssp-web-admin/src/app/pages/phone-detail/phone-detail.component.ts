import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { photoDetail } from '../../axios/api';
import { StorageService } from '../../service/storage.service';
import { typeChange } from '../../../assets/js/common.js';
import {Router} from '@angular/router';
import { imgHandle } from '../../../assets/js/common.js'
@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  id: 0;
  text = '';
  data = [];
  constructor( private route:ActivatedRoute,public service: StorageService,private router:Router ) {}

  ngOnInit(): void {
    this.service.stitle = '随手拍详情'
    this.getId();
    // this.text = this.data[0].time;
  }


  getId(){
    this.id = this.route.snapshot.params['id'];
    this.getDetail();
  }

  getDetail() {
    photoDetail({
      freportId: this.id
    }).then(res =>{
      console.log(res)
      let tempData = [];
      res.items.forEach(item =>{
        if (!item.report.fimages){
          item.report.fimages = null
        }
        tempData.push({
          id : item.report.freportId,
          time: item.report.fcreateTime,
          text: item.report.fcontent,
          status: item.report.facceptStatus,
          img: imgHandle(item.report.fimages),
          phone: item.report.fphone,
          seeNum: item.report.fviewNum,
          type: typeChange(item.report.freportType)
        })
      })
      this.data = tempData;
      console.log(this.data)
      this.text = `${this.data[0].type}\n
      ${this.data[0].time}` 
    })
  }

  goBack() {
    this.router.navigate(['home/photo']);
  }
}
