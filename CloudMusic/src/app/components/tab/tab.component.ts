import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.styl']
})
export class TabComponent implements OnInit {
  isRecommendSelected : boolean = false;
  isRankSelected : boolean = false;
  isSearchSelected : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeRec() {
    this.isRecommendSelected = true
    this.isRankSelected = false
    this.isSearchSelected = false
  }

  changeRank() {
    this.isRankSelected = true
    this.isRecommendSelected = false
    this.isSearchSelected = false
  }

  changeSelect() {
    this.isSearchSelected = true
    this.isRecommendSelected = false
    this.isRankSelected = false
  }
}
