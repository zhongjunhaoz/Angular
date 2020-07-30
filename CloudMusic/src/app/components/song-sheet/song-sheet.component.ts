import { Component, OnInit } from '@angular/core';
import { songSheet } from '../../axios/api';

@Component({
  selector: 'app-song-sheet',
  templateUrl: './song-sheet.component.html',
  styleUrls: ['./song-sheet.component.styl']
})
export class SongSheetComponent implements OnInit {
  sheet: Array<Object> = []
  constructor() { }

  ngOnInit(): void { //一进入就执行这个方法
    this.getSongSheet();

  }

  // 获取歌单的方法
  getSongSheet() {
    songSheet({
      limit: 15
    }).then(res => {
      if ((res as any).code == 200) {
        // console.log(res)
        this.sheet = [];
        (res as any).result.forEach(item => {
          this.sheet.push({
            id: item.id,
            name: item.name,
            pic: item.picUrl
          });
        })
        // console.log(this.sheet);
      }
    });
  }
}
