import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeUserRoutingModule } from './home-user-routing.module';
import { HomeUserComponent } from './home-user.component';
import { HeaderModule } from 'src/app/components/user/header/header.module';

import { UserComponentsModule } from '../../../components/user/user-components.module';
@NgModule({
  declarations: [
    HomeUserComponent,
  ],
  imports: [
    CommonModule,
    HomeUserRoutingModule,
    HeaderModule,
    UserComponentsModule
  ]
})
export class HomeUserModule { }
