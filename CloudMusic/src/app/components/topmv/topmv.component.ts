import { Component, OnInit } from '@angular/core';
import { topMV } from '../../axios/api';

@Component({
  selector: 'app-topmv',
  templateUrl: './topmv.component.html',
  styleUrls: ['./topmv.component.styl']
})
export class TopmvComponent implements OnInit {
  MV: Array<Object> = []
  constructor() { }

  ngOnInit(): void {
    this.getTopMV();
  }

  getTopMV() {
    topMV({
      limit: 16
    }).then(res => {
      if ((res as any).code == 200) {
        // console.log(res)
        (res as any).data.forEach(item => {
          // console.log(item)
          this.MV.push({
            id: item.id,
            name: item.name,
            songer: item.artistName,
            img: item.cover
          })
        });
      }
    })
  }
}
