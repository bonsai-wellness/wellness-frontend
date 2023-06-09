// app-routing.module.ts
// archivo principal de rutas
// iniciliza al sistema en el modulo de auth con LOGIN
// Redirige al la app de administrador o usuario dependiendo de la autorizacion realizada en AuthModule
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { 
  AuthGuardService as AuthGuard, AuthGuardService 
} from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },
  {
    path: "login",
    loadChildren: () =>
    import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "home",
    loadChildren: () => 
    import("./pages/user/user-app/user-app.module").then((m) => m.UserAppModule),
    canActivate: [AuthGuardService],
  },
  {
    path: "admin",
    loadChildren: () => 
    import("./pages/admin/app-admin.module").then((m) => m.AppAdminModule),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
