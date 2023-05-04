import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [WelcomeRoutingModule, NzDrawerModule, FormsModule, CommonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
