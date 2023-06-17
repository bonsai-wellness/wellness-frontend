// card-reservacion.component.ts
// Coomponente de la tarjeta de reservacion
// Define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-card-reservacion' al componente
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-reservacion',
  templateUrl: './card-reservacion.component.html',
  styleUrls: ['./card-reservacion.component.css']
})
export class CardReservacionComponent {
  
  @Input() reservation:any;

  
}
