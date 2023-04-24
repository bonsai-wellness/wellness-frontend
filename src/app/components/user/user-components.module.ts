import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './home/stats/stats.component';
import { ReservacionesComponent } from './home/reservaciones/reservaciones.component';
import { AnunciosComponent } from './home/anuncios/anuncios.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    StatsComponent,
    ReservacionesComponent,
    AnunciosComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    StatsComponent,
    ReservacionesComponent,
    AnunciosComponent,
    ]
})
export class UserComponentsModule { }
