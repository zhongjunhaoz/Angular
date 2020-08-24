import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderInputComponent } from './components/header-input/header-input.component';
import { ThemeMarketComponent } from './components/theme-market/theme-market.component';
import { HaveGoodsComponent } from './components/have-goods/have-goods.component';
import { LiveComponent } from './components/live/live.component';
import { SpecialComponent } from './components/special/special.component';
import { HotgoodsComponent } from './components/hotgoods/hotgoods.component';
import { LoveComponent } from './components/love/love.component';
import { FootComponent } from './components/foot/foot.component';
import { FloatboxComponent } from './components/floatbox/floatbox.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HeaderInputComponent,
    ThemeMarketComponent,
    HaveGoodsComponent,
    LiveComponent,
    SpecialComponent,
    HotgoodsComponent,
    LoveComponent,
    FootComponent,
    FloatboxComponent
  ],
  imports: [
    NzCarouselModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
