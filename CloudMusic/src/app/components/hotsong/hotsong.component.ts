import { Component, OnInit } from '@angular/core';
import { hotSong} from '../../axios/api';

@Component({
  selector: 'app-hotsong',
  templateUrl: './hotsong.component.html',
  styleUrls: ['./hotsong.component.styl']
})
export class HotsongComponent implements OnInit {
  hotSongsList: Array<any> = ['周杰伦','晴天','七里香','千里之外','东风破','说好不哭','黑色毛衣','听妈妈的话','你算什么男人'];

  constructor() { }

  ngOnInit(): void {
    this.getHotSong();
  }

  getHotSong() {
    hotSong({}).then(res =>{
      if ((res as any).code == 200) {
        (res as any).result.hots.forEach(item => {
          this.hotSongsList.push(item.first)
        });
      }
    })
  }

  getItemVal(item) {
    console.log(item)
  }
}
