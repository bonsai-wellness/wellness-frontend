import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { UserComponentsModule } from '../../../components/user/user-components.module';
import { IconsProviderModule } from '../../../icons-provider.module';

import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UserComponentsModule,
    IconsProviderModule,
    NzIconModule,
  ]
})
export class HomeModule { }
