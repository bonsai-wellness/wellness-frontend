import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { IconsProviderModule } from '../../../icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import {HeaderComponent} from './header.component';


@NgModule({
  declarations: [
    HeaderComponent],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzMenuModule,
    IconsProviderModule,
    HttpClientModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
