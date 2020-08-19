import { Component, OnInit } from '@angular/core';
import { users } from '../../axios/api';
// import { changePipe } from '../../../assets/js/common.module'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableParam = {
    border: true, //边框
    pageSize: 10, //每页数据
    showPageSizeChanger: false, //是否可以改变每页数据
    showPagination: false, //是否显示分页器
    showQuickJump: false, //是否可以快速跳转至某页
    hideOnSinglePage: true, //当只有一页时是否隐藏分页器
  };
  
  theadParam = {
    left: true,
    right: true,
    width: '20px'
  };
  page = 1;
  totalItem = 0;
  keyWord: null
 
  dataSet = [];
  constructor() { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    users({
      page: this.page,
      limit: this.tableParam.pageSize,
      keyWord:this.keyWord
    }).then(res=>{
      let data = [];
      console.log(res)
      res.items.forEach(item => {
        data.push({
          name: item.fuserName,
          nickName: item.fnickName,
          password: item.fpassword,
          phoneNum: item.fphone,
          userComeFrom: item.fuserSource,
          userState: item.fuserStatus,
          mark: item.fremark,
          signInTime: item.floginTime
        })
      })
      this.totalItem = res.total;
      this.dataSet = data;
      // console.log(this.dataSet)
    })
  }
  changePageIndex(pageIndex){
    // console.log(pageIndex)
    this.page = pageIndex;
    this.getUsers();
  }
  changePageSize(pageSize) {
    this.tableParam.pageSize = pageSize;
    this.getUsers();
  }
  search(val){
    this.keyWord = val;
    this.getUsers();
  }
}
