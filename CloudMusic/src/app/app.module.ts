import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { TabComponent } from './components/tab/tab.component';
import { RecommendComponent } from './pages/recommend/recommend.component';
import { RankComponent } from './pages/rank/rank.component';
import { SearchComponent } from './pages/search/search.component';
import { SongSheetComponent } from './components/song-sheet/song-sheet.component';
import { TopmvComponent } from './components/topmv/topmv.component';
import { NewsongComponent } from './components/newsong/newsong.component';
import { Rank0Component } from './components/rank/rank0/rank0.component';
import { Rank1Component } from './components/rank/rank1/rank1.component';
import { Rank2Component } from './components/rank/rank2/rank2.component';
import { Rank3Component } from './components/rank/rank3/rank3.component';
import { Rank4Component } from './components/rank/rank4/rank4.component';
import { SearchinputComponent } from './components/searchinput/searchinput.component';
import { HotsongComponent } from './components/hotsong/hotsong.component';
// import { Rank4Component } from './components/rank/rank4/rank4.component';
// import { Rank5Component } from './components/rank/rank5/rank5.component';
// import { Rank6Component } from './components/rank/rank6/rank6.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TabComponent,
    RecommendComponent,
    RankComponent,
    SearchComponent,
    SongSheetComponent,
    TopmvComponent,
    NewsongComponent,
    Rank0Component,
    Rank1Component,
    Rank2Component,
    Rank3Component,
    Rank4Component,
    SearchinputComponent,
    HotsongComponent,
    // Rank4Component,
    // Rank5Component,
    // Rank6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: RecommendComponent },
      { path: 'recommend', component: RecommendComponent },
      { path: 'rank', component: RankComponent },
      { path: 'search', component: SearchComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
