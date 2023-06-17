// card-anuncios.component.ts
// Componente de la tarjeta de anuncios
// Define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-card-anuncios'
import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
@Component({
  selector: 'app-card-anuncio',
  templateUrl: './card-anuncio.component.html',
  styleUrls: ['./card-anuncio.component.css']
})
export class CardAnuncioComponent implements OnInit {
  @Input() aviso_id=0;
  @Input() name = '';
  @Input() imagen = '';
  @Input() description = '';
  @Input() url = '';

  baseURL = AppConstants.baseURL;

  ngOnInit() {

  }
}
