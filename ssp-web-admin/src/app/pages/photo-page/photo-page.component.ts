import { Component, OnInit } from '@angular/core';
import { todayNum, allReports} from '../../axios/api';
import { typeChange } from '../../../assets/js/common.js'
import {Router} from '@angular/router';
import { imgHandle } from '../../../assets/js/common.js'
@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {
  todayReportNum = 100; //今日上报数
  todayHandleNum = 100; //今日处理数
  page = 1;
  limit = 20;

  totalAll = 1;
  totalNewR = 1;
  totalNewHand = 1;
  totalHand = 1;

  type = ['A','B','C'];
  searchType = null;
  searchText=""; //搜索关键字
  allReportsData = []; //所有上报

  // 是否显示分页器
  showFootAll = true;
  showFootNewR = false;
  showFootNewHand = false;
  showFootHand = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getTodayNum();
    this.getAllReports();
  }


  // 今日上报和处理数
  getTodayNum() {
    todayNum({}).then(res => {
      if (res.msg == '操作成功') {
        // console.log(res)
        this.todayReportNum = res.items[0].reportNum;
        this.todayHandleNum = res.items[0].handleNum;
      }
    })
  }
  //所有上报
  getAllReports() {
    this.showFootAll = true;
    this.showFootNewR = false;
    this.showFootNewHand = false;
    this.showFootHand = false;
    this.searchType = null;
    allReports({
      page: this.page,
      limit: this.limit,
      type: null,
      queryContent: this.searchText,
      roleTypeList: 'A'
    }).then( res =>{
      if (res.msg == '操作成功'){
        this.totalAll = res.total;
        let tempAllReportsData = [];
        res.items.forEach(item =>{
          if (!item.fimages){
            item.fimages = null
          }
          tempAllReportsData.push({
            id: item.freportId, //上报id
            time: item.fcreateTime, //上报时间
            text: item.fcontent, //内容
            img: imgHandle(item.fimages), //图片
            status: item.freportStatus, //上报状态
            type: typeChange(item.freportType), //上报类型方式（实名A，匿名B）
            seeNum: item.fviewNum,//查看人数
          })
        })
        this.allReportsData = tempAllReportsData;
        // console.log(this.allReportsData)
      }
    })
  }
  // 最新上报
  getNewReports() {
    this.showFootAll = false;
    this.showFootNewR = true;
    this.showFootNewHand = false;
    this.showFootHand = false;
    this.searchType = "A";
    allReports({
      page: this.page,
      limit: this.limit,
      queryContent: this.searchText,
      type: this.type[0],
      roleTypeList: 'A'
    }).then(res =>{
      if (res.msg == '操作成功'){
        this.totalNewR = res.total;
        // console.log(res);
        let tempAllReportsData = [];
        res.items.forEach(item =>{
          if (!item.fimages){
            item.fimages = null
          }
          // console.log(item)
          tempAllReportsData.push({
            id: item.freportId, //上报id
            time: item.fcreateTime, //上报时间
            text: item.fcontent, //内容
            img: imgHandle(item.fimages), //图片
            status: item.freportStatus, //上报状态
            type: typeChange(item.freportType), //上报类型方式（实名A，匿名B）
            seeNum: item.fviewNum,//查看人数
          })
        })
        this.allReportsData = tempAllReportsData;
        // console.log(this.allReportsData)
      }
    })
  }
// 最新处理
  getNewHandle(){
    this.showFootAll = false;
    this.showFootNewR = false;
    this.showFootNewHand = true;
    this.showFootHand = false;
    this.searchType = "B";
    allReports({
      page: this.page,
      limit: this.limit,
      queryContent: this.searchText,
      type: this.type[1],
      roleTypeList: 'A'
    }).then(res =>{
      if (res.msg == '操作成功'){
        this.totalNewHand = res.total;
        // console.log(res);
        let tempAllReportsData = [];
        res.items.forEach(item =>{
          if (!item.fimages){
            item.fimages = null
          }
          tempAllReportsData.push({
            id: item.freportId, //上报id
            time: item.fcreateTime, //上报时间
            text: item.fcontent, //内容
            img: imgHandle(item.fimages), //图片
            status: item.freportStatus, //上报状态
            type: typeChange(item.freportType), //上报类型方式（实名A，匿名B）
            seeNum: item.fviewNum,//查看人数
          })
        })
        this.allReportsData = tempAllReportsData;
        // console.log(this.allReportsData)
      }
    })
  }
// 已处理
  getHandled() {
    this.showFootAll = false;
    this.showFootNewR = false;
    this.showFootNewHand = false;
    this.showFootHand = true;
    this.searchType = "C";
    allReports({
      page: this.page,
      limit: this.limit,
      queryContent: this.searchText,
      type: this.type[2],
      roleTypeList: 'A'
    }).then(res =>{
      if (res.msg == '操作成功'){
        this.totalHand = res.total;
        // console.log(res);
        let tempAllReportsData = [];
        res.items.forEach(item =>{
          if (!item.fimages){
            item.fimages = null
          }
          // console.log(item)
          tempAllReportsData.push({
            id: item.freportId, //上报id
            time: item.fcreateTime, //上报时间
            text: item.fcontent, //内容
            img: imgHandle(item.fimages), //图片
            status: item.freportStatus, //上报状态
            type: typeChange(item.freportType), //上报类型方式（实名A，匿名B）
            seeNum: item.fviewNum,//查看人数
          })
        })
        this.allReportsData = tempAllReportsData;
        // console.log(this.allReportsData)
      }
    })
  }
  // 搜索
  search() {
    allReports({
      page: this.page,
      limit: this.limit,
      type: this.searchType,
      queryContent: this.searchText,
      roleTypeList: 'A'
    }).then( res =>{
      if (res.msg == '操作成功'){
        // console.log(res);
        let tempAllReportsData = [];
        res.items.forEach(item =>{
          if (!item.fimages){
            item.fimages = null
          }
          // console.log(item)
          tempAllReportsData.push({
            id: item.freportId, //上报id
            time: item.fcreateTime, //上报时间
            text: item.fcontent, //内容
            img: imgHandle(item.fimages), //图片
            status: item.freportStatus, //上报状态
            type: typeChange(item.freportType), //上报类型方式（实名A，匿名B）
            seeNum: item.fviewNum,//查看人数
          })
        })
        this.allReportsData = tempAllReportsData;
        // console.log(this.allReportsData)
      }
    })
  }

  goDetail(id){
    this.router.navigate(['home/detail', id]);
  }
  goUpload(){
    this.router.navigate(['home/upload']);
  }

  // 全部上报
  changePageIndexAll(pageIndex) {
    this.page = pageIndex;
    this.getAllReports();
  }
  changePageSizeAll(pageSize) {
    this.limit = pageSize;
    this.getAllReports();
  }
  // 最新上报
  changePageIndexNewR(pageIndex) {
    this.page = pageIndex;
    this.getNewReports();
  }
  changePageSizeNewR(pageSize) {
    this.limit = pageSize;
    this.getNewReports();
  }
  // 最新处理
  changePageIndexNewHand(pageIndex) {
    this.page = pageIndex;
    this.getNewHandle();
  }
  changePageSizeNewHand(pageSize) {
    this.limit = pageSize;
    this.getNewHandle();
  }
  // 已处理
  changePageIndexHand(pageIndex) {
    this.page = pageIndex;
    this.getHandled();
  }
  changePageSizeHand(pageSize) {
    this.limit = pageSize;
    this.getHandled();
  }
}
