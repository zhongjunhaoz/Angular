import { Component, OnInit } from '@angular/core';
import { searchSuggest, search } from '../../axios/api';
@Component({
  selector: 'app-searchinput',
  templateUrl: './searchinput.component.html',
  styleUrls: ['./searchinput.component.styl']
})
export class SearchinputComponent implements OnInit {
  loading: boolean = true;
  songName: String = "";
  searchSuggestItem: Array<any> = [];
  hasResult: boolean = true;
  searchResult: Array<any> = [];
  haveResult: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  //传入关键字，执行搜索，得到搜索结果searchResult
  search() {
    // (this.hasResult = false),
    search({
      keywords: this.songName,
      limit: 30,
    }).then((res) => {
      if ((res as any).code == 200) {
        this.searchResult = [];
        // console.log(res.result.songs)
        (res as any).result.songs.forEach((item) => {
          // console.log(item.artists)
          let songers = [];
          item.artists.forEach((itemA) => {
            songers.push(itemA.name);
          });
          this.searchResult.push({
            id: item.id,
            name: item.name,
            pic: item.album.artist.img1v1Url,
            album: item.album.name,
            songer: songers.join("/"),
          });
          // console.log(this.searchResult)
          // console.log(item)
        });
        this.hasResult = false;
      }
    });
  }

  //每当输入框的值变化，就执行此方法。
  getSearchValue(val) {
    console.log('jjj')
    if (val == "") {
      this.hasResult = false;
      this.haveResult = false;
      return;
    } else {
      this.hasResult = true;
      this.haveResult = true;
    }
    searchSuggest({
      type: 'mobile',
      keywords: this.songName,
    }).then((res)=>{
      if ((res as any).code == 200) {
        this.searchSuggestItem = [];
        (res as any).result.allMatch.forEach((item)=>{
          this.searchSuggestItem.push(item.keywords)
        })
      }
    })
  }
}
