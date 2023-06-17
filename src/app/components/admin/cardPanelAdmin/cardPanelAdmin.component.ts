// cardPanelAdmin.component.ts
// Componente de la tarjeta de panel admin
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-cardPanelAdmin' al componente
import { Component, Input, NgIterable } from '@angular/core';
import { ModuleAdmin } from 'src/app/models/admin/moduleAdmin/moduleAdmin';

@Component({
  selector: 'app-cardPanelAdmin',
  templateUrl: './cardPanelAdmin.component.html',
  styleUrls: ['./cardPanelAdmin.component.css']
})
export class CardPanelAdminComponent  {

  @Input() name = '';
  @Input() image = '';
  @Input() total = 0;
  @Input() active = 0;
  @Input() inactive = 0;
  @Input() lastEdit = '';
  @Input() path = '';

}



