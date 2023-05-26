import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./pages/auth/main/main.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
    import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "home",
    loadChildren: () => 
    import("./pages/user/user-app/user-app.module").then((m) => m.UserAppModule),
  },
  {
    path: "admin",
    loadChildren: () => 
    import("./pages/admin/app-admin.module").then((m) => m.AppAdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
