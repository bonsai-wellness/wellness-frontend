import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelAdminComponent } from './panelAdmin.component';

const routes: Routes = [
  { path: '', component: PanelAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelAdminRoutingModule { }
