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

  ngOnInit(){
    this._apiservice.getAllActiveAnuncios().subscribe( (res) =>{
      this.arrAnuncios = res;
        });
  }

}
