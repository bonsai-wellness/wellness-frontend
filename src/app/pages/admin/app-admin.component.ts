// app-admin-component.ts
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// componente que se crea y se asigna el nombre 'app-admin'
import { Component } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./app-admin.component.html",
  styleUrls: ["./app-admin.component.css"],
})

export class AppAdminComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  isCollapsed = false;
}
