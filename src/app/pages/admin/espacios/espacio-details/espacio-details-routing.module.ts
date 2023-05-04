import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspacioDetailsComponent } from './espacio-details.component';

const routes: Routes = [
  { path: '', component: EspacioDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspacioDetailsRoutingModule { }
