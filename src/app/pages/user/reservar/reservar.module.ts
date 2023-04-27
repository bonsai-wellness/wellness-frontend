import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservarRoutingModule } from './reservar-routing.module';
import { ReservarComponent } from './reservar.component';
import { UserComponentsModule } from 'src/app/components/user/user-components.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    ReservarComponent
  ],
  imports: [
    CommonModule,
    ReservarRoutingModule,
    NzInputModule,
    NzIconModule,
    UserComponentsModule,
  ]
})
export class ReservarModule { }
