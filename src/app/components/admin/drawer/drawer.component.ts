// drawer.component.ts
// Componente de la barra de navegación admin
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-drawer' al componente
import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isCollapsed = false;
}
