import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './home/stats/stats.component';
import { ReservacionesComponent } from './home/reservaciones/reservaciones.component';
import { AnunciosComponent } from './home/anuncios/anuncios.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardDeporteComponent } from './reservar/card-deporte/card-deporte.component';



@NgModule({
  declarations: [
    StatsComponent,
    ReservacionesComponent,
    AnunciosComponent,
    CardDeporteComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    StatsComponent,
    ReservacionesComponent,
    AnunciosComponent,
    CardDeporteComponent
    ]
})
export class UserComponentsModule { }
