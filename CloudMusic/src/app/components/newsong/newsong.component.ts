import { Component, OnInit } from '@angular/core';
import { newSong } from '../../axios/api';
@Component({
  selector: 'app-newsong',
  templateUrl: './newsong.component.html',
  styleUrls: ['./newsong.component.styl']
})
export class NewsongComponent implements OnInit {
  newsongs : Array<Object> = []
  constructor() { }

  ngOnInit(): void {
    this.getNewSong()
  }

  getNewSong() {
    newSong({}).then(res => {
        if((res as any).code == 200) {
            // console.log(res)
            let newSong = [];
            (res as any).result.forEach(item =>{
                let songers = []
                item.song.artists.forEach(itemA =>{
                    songers.push(itemA.name)
                })
                // console.log(songers)
                newSong.push({
                    id: item.id,
                    name: item.name,
                    pic: item.picUrl,
                    songer: songers.join("/")
                })
            })
            this.newsongs = newSong.splice(0,9)//截取前9个
        }
    })
}
}
