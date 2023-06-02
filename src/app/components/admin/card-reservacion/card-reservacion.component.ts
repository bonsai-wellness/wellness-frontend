import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-reservacion',
  templateUrl: './card-reservacion.component.html',
  styleUrls: ['./card-reservacion.component.css']
})
export class CardReservacionComponent {
  
  @Input() reservation:any;

  
}
