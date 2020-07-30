import { Component, OnInit } from '@angular/core';
import { rank } from '../../../axios/api';
@Component({
  selector: 'app-rank1',
  templateUrl: './rank1.component.html',
  styleUrls: ['./rank1.component.styl']
})
export class Rank1Component implements OnInit {
  coverImage : String = "";
  topSongs: Array<Object> = [];
  topSong : Array<Object> = [];
  constructor() { }

  ngOnInit(): void {
    this.getRank();
  }

  getRank() {
    rank({
      idx: 1
    }).then(res => {
      if ((res as any).code == 200) {
        this.coverImage = (res as any).playlist.coverImgUrl;
        // this.rankId = res.playlist.id;
        // console.log(res);
        // console.log(res.playlist.tracks);
        (res as any).playlist.tracks.forEach(item => {
          let songerName = [];
          // console.log(item)
          item.ar.forEach(itemA => {
            // console.log(itemA.name)
            songerName.push(itemA.name);
          });
          this.topSongs.push({
            name: item.name,
            songerName: songerName.join("/")
          });
        });
        this.topSong = this.topSongs.slice(0, 3); //截取前三个歌曲
        console.log(this.topSong);
      }
    });
  }
}
