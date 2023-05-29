import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnunciosComponent } from "./anuncios/anuncios.component";
import { AppAdminComponent } from "./app-admin.component";
import { EspacioDetailsComponent } from "./espacios/espacio-details/espacio-details.component";
import { EspaciosComponent } from "./espacios/espacios.component";
import { PanelAdminComponent } from "./panelAdmin/panelAdmin.component";
import { TorneosComponent } from "./torneos/torneos.component";

const routes: Routes = [
  {
    path: "",
    component: AppAdminComponent,
    children: [
      { path: '', component: PanelAdminComponent}, 
      { path: 'panel-admin', component: PanelAdminComponent}, 
      { path: 'espacios', component: EspaciosComponent, children: [
        // {
        //   path: 'espacios/:espacio_id/espacio-details', 
        //   component: EspacioDetailsComponent, 
        // },
      ],}, 
      { path: 'torneos', component: TorneosComponent}, 
      { path: 'anuncios', component: AnunciosComponent}, 
      {
        path: 'espacios/:espacio_id/espacio-details', 
        component: EspacioDetailsComponent, 
      },
      { path: "**", redirectTo: "" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppAdminRoutingModule {}
