// card-estadisticas.component.ts
// Componente de la tarjeta de estadisticas
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// componente que se crea y se asigna el nombre 'app-card-estadisticas'
import Chart from 'chart.js/auto';
import { Component } from '@angular/core';
import { min } from 'cypress/types/lodash';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-card-estadisticas',
  template: `
    <h2>Componente 1</h2>
    <p>Contenido del componente 1</p>
    <h2>Componente 2</h2>
    <p>Contenido del componente 2</p>
  `
})
export class CardEstadisticasComponent { }

@Component({
  selector: 'app-card-estadisticas3',
  template: `
    <h2>Componente 3</h2>
    <p>Contenido del componente 3</p>
    <h2>Componente 4</h2>
    <p>Contenido del componente 4</p>
  `
})
export class Componente2Component { }