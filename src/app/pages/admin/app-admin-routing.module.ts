import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PanelAdminComponent } from "src/app/pages/admin/panelAdmin/panelAdmin.component";
import { AppAdminComponent } from "./app-admin.component";
import { TorneosModule } from "./torneos/torneos.module";
const routes: Routes = [
  {
    path: "",
    component: AppAdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'panelAdmin' },
      {
        path: "welcome",
        loadChildren: () =>
          import("../../pages/welcome/welcome.module").then(
            (m) => m.WelcomeModule
          ),
      },
      // { path: 'home-user', loadChildren: () => import('./pages/user/home-user/home-user.module').then(m => m.HomeUserModule) },
      {
        path: "panelAdmin",
        loadChildren: () =>
          import("./panelAdmin/panelAdmin.module").then(
            (m) => m.PanelAdminModule
          ),
      },
      {
        path: "espacios",
        loadChildren: () =>
          import("./espacios/espacios.module").then((m) => m.EspaciosModule),
      },
      {
        path: "torneos",
        loadChildren: () =>
          import("./torneos/torneos.module").then(
            (m) => m.TorneosModule
          ),
      },
      {
        path: "anuncios",
        loadChildren: () =>
          import("../../pages/welcome/welcome.module").then(
            (m) => m.WelcomeModule
          ),
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
