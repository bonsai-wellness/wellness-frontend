import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnunciosComponent } from "./anuncios/anuncios.component";
import { AppAdminComponent } from "./app-admin.component";
import { EspacioDetailsComponent } from "./espacios/espacio-details/espacio-details.component";
import { EspaciosComponent } from "./espacios/espacios.component";
import { PanelAdminComponent } from "./panelAdmin/panelAdmin.component";
import { TorneosComponent } from "./torneos/torneos.component";
import { AdminLoginComponent } from "src/app/components/admin/admin-login/admin-login.component";
import { RoleGuardService } from "src/app/services/role-guard-service.service";

const routes: Routes = [
  {
    path: "",
    component: AppAdminComponent,
    canActivate: [RoleGuardService],
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
