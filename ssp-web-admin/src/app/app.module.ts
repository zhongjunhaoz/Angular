import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageService } from './service/storage.service'
import { changePipe } from '../assets/js/common.module'

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzRadioModule } from 'ng-zorro-antd/radio';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { PhotoPageComponent } from './pages/photo-page/photo-page.component';
import { OrdersHandlePageComponent } from './pages/orders-handle-page/orders-handle-page.component';
import { AccManagementPageComponent } from './pages/acc-management-page/acc-management-page.component';
import { PerOrgenizePageComponent } from './pages/per-orgenize-page/per-orgenize-page.component';
import { RoleManagementPageComponent } from './pages/role-management-page/role-management-page.component';
import { ResourceManagePageComponent } from './pages/resource-manage-page/resource-manage-page.component';
import { HandlePageComponent } from './pages/handle-page/handle-page.component';
import { InputComponent } from './components/input/input.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TableComponent } from './components/table/table.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { PhoneDetailComponent } from './pages/phone-detail/phone-detail.component';
import { UploadComponent } from './pages/upload/upload.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    changePipe,
    AppComponent,
    HeaderComponent,
    NavComponent,
    SigninComponent,
    HomeComponent,
    OrdersPageComponent,
    PhotoPageComponent,
    OrdersHandlePageComponent,
    AccManagementPageComponent,
    PerOrgenizePageComponent,
    RoleManagementPageComponent,
    ResourceManagePageComponent,
    HandlePageComponent,
    InputComponent,
    BreadcrumbComponent,
    SearchInputComponent,
    TableComponent,
    NotFound404Component,
    PhoneDetailComponent,
    UploadComponent
  ],
  imports: [
    NzRadioModule,
    NzUploadModule,
    NzStepsModule,
    NzTabsModule,
    NzPaginationModule,
    NzTableModule,
    NzCardModule,
    NzBreadCrumbModule,
    NzMessageModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    NzMenuModule,
    NzAvatarModule,
    NzIconModule,
    NzModalModule,
    NzGridModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: SigninComponent },
      { path: '404NotFound', component: NotFound404Component },
      {
        path: 'home', component: HomeComponent, children: [
          {
            path: '', component: PhotoPageComponent
          },
          {
            path: 'photo', component: PhotoPageComponent
          },
          {
            path: 'orders', component: OrdersPageComponent
          },
          {
            path: 'ordershandle',component: OrdersHandlePageComponent
          },
          {
            path: 'accmanagement',component: AccManagementPageComponent
          },
          {
            path: 'perorganize',component: PerOrgenizePageComponent
          },
          {
            path: 'rolemanagement',component: RoleManagementPageComponent
          },
          {
            path: 'resoursemanagement',component: ResourceManagePageComponent
          },
          {
            path: 'handle',component: HandlePageComponent
          },
          {
            path: 'detail/:id',component: PhoneDetailComponent
          },
          {
            path: 'upload',component: UploadComponent
          }
        ]
      },
      {
        path: '**',
        redirectTo: '404NotFound',
        pathMatch:'full'
      }
    ])
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
