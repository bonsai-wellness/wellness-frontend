import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
  imports: [WelcomeRoutingModule,
  NzDrawerModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
