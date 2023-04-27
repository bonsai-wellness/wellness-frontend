import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PanelAdminComponent } from "./panelAdmin.component";
import { EspaciosModule } from "../espacios/espacios.module";
import { WelcomeModule } from "../../welcome/welcome.module";

const routes: Routes = [
  {
    path: '',
    component: PanelAdminComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () =>
          import("../../../pages/welcome/welcome.module").then(
            (m) => m.WelcomeModule
          ),
      },
      // { path: 'home-user', loadChildren: () => import('./pages/user/home-user/home-user.module').then(m => m.HomeUserModule) },
      // { path: 'panelAdmin', loadChildren: () => import('./pages/admin/panelAdmin/panelAdmin.module').then(m => m.PanelAdminModule) },
      {
        path: 'espacios',
        loadChildren: () =>
          import("../../../pages/admin/espacios/espacios.module").then(
            (m) => m.EspaciosModule
          ),
      },
      {
        path: 'torneos',
        loadChildren: () =>
          import("../../../pages/welcome/welcome.module").then(
            (m) => m.WelcomeModule
          ),
      },
      {
        path: 'anuncios',
        loadChildren: () =>
          import("../../../pages/welcome/welcome.module").then(
            (m) => m.WelcomeModule
          ),
      },
      {path:'**', redirectTo:''}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelAdminRoutingModule {}
