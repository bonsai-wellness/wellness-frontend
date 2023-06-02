import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisReservacionesComponent } from './mis-reservaciones.component';

const routes: Routes = [{ path: '', component: MisReservacionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisReservacionesRoutingModule { }
