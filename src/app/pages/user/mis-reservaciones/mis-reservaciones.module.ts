import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisReservacionesComponent } from './mis-reservaciones.component';
import { UserComponentsModule } from 'src/app/components/user/user-components.module';
import { MisReservacionesRoutingModule } from './mis-reservaciones-routing.module.ts';
import { NzListModule } from "ng-zorro-antd/list";

@NgModule({
  declarations: [
    MisReservacionesComponent
  ],
  imports: [
    CommonModule,
    MisReservacionesRoutingModule,
    UserComponentsModule,
    NzListModule,
  ]
})
export class MisReservacionesModule { }
