// app.component.ts
// Pantalla principal de la aplicación
// Define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-root' al componente
// Archivo raiz, manipula el router-outlet donde despues se cargaran los otros componentes 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isCollapsed = false;
}
