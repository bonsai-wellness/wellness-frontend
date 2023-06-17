
//Rutas del modulo de login, 
// se encarga de validar los datos del usuario antes de dar acceso a la plataforma
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
