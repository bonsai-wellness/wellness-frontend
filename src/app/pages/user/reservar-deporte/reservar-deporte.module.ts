import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservarDeporteComponent } from './reservar-deporte.component';

import { ReservarDeporteRoutingModule } from './reservar-deporte-routing.module';
import { UserComponentsModule } from 'src/app/components/user/user-components.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    ReservarDeporteComponent
  ],
  imports: [
    CommonModule,
    ReservarDeporteRoutingModule,
    NzInputModule,
    NzIconModule,
    UserComponentsModule
  ]
})
export class ReservarDeporteModule { }
