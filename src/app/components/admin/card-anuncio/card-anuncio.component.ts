import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
@Component({
  selector: 'app-card-anuncio',
  templateUrl: './card-anuncio.component.html',
  styleUrls: ['./card-anuncio.component.css']
})
export class CardAnuncioComponent implements OnInit {

  @Input() name = '';
  @Input() imagen = '';
  @Input() description = '';
  @Input() url = '';

  baseURL = AppConstants.baseURL;

  ngOnInit() {
    // this._apiservice.getAllActiveAnuncios().subscribe((res) => {
    //   this.arrAnuncios = res;
    // });
    // this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
    //   this.arrEspacioPadre = res;
    // });

    // this._apiservice.getAllDeportes().subscribe((res) => {
    //   this.arrDeportes = res;
    // });
  }
}
