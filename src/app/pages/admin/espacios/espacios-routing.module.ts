import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EspaciosComponent } from "./espacios.component";
import { EspacioDetailsComponent } from "./espacio-details/espacio-details.component";
const routes: Routes = [
  {
    path: '',
    component: EspaciosComponent,
  },
  { path: ':espacio_id/espacio-details', loadChildren: () => import('./espacio-details/espacio-details.module').then(m => m.EspacioDetailsModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaciosRoutingModule {}
