import { Component, Input } from '@angular/core';
import { Anuncio } from 'src/app/models/anuncio/anuncio';
import { ApiserviceService } from 'src/app/Service';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent {
  currentName='hola';
  baseURL = AppConstants.baseURL;
  constructor(private _apiservice: ApiserviceService){}

  arrAnuncios: any = [];
  //  = [
  // {
    //   aviso_id: 0,
    //   created_at: "../../../../assets/login-image.jpeg",
    //   updated_at: "",
    //   name: "Torneo Tochito",
    //   description: "Canchas Escamilla",
    //   image: '../../../../assets/wellness.jpeg',
    //   is_active: true,
    //   url: '',
    // },
    // {
    //   aviso_id: 1,
    //   created_at: '../../../../../assets/anunciod.png',
    //   updated_at: "",
    //   name: "Torneo Tochito",
    //   description: "Canchas Escamilla",
    //   image: '../../../../assets/tecfoto.jpeg',
    //   is_active: true,
    //   url: '',
    // } 
  // ];

  ngOnInit(){
    this._apiservice.getAllActiveAnuncios().subscribe( (res) =>{
      console.log("anuncios", res);
      this.arrAnuncios = res;
        });
  }

}
