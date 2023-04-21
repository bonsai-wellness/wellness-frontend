import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspaciosComponent } from './espacios.component';

const routes: Routes = [
  { path: '', component: EspaciosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspaciosRoutingModule { }
