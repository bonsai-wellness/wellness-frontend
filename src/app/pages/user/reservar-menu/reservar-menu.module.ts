import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservarMenuRoutingModule } from './reservar-menu-routing.module';
import { ReservarMenuComponent } from './reservar-menu.component';
import { UserComponentsModule } from 'src/app/components/user/user-components.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    ReservarMenuComponent
  ],
  imports: [
    CommonModule,
    ReservarMenuRoutingModule,
    NzInputModule,
    NzIconModule,
    UserComponentsModule,
  ]
})
export class ReservarMenuModule { }
