import { Component, Input } from '@angular/core';
import { Anuncio } from 'src/app/models/anuncio/anuncio';
@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent {
  currentName='hola';

  arrAnuncios: Anuncio[] = [
    {
      aviso_id: 0,
      created_at: "../../../../assets/login-image.jpeg",
      updated_at: "",
      name: "Torneo Tochito",
      description: "Canchas Escamilla",
      image: '../../../../assets/wellness.jpeg',
      is_active: true,
      url: '',
    },
    {
      aviso_id: 1,
      created_at: '../../../../../assets/anunciod.png',
      updated_at: "",
      name: "Torneo Tochito",
      description: "Canchas Escamilla",
      image: '../../../../assets/tecfoto.jpeg',
      is_active: true,
      url: '',
    } 
  ];

}
