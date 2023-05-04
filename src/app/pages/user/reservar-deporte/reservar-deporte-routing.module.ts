import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservarDeporteComponent } from './reservar-deporte.component';

const routes: Routes = [{ path: '', component: ReservarDeporteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservarDeporteRoutingModule { }
