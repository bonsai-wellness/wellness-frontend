import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
@Component({
  selector: 'app-card-anuncio',
  templateUrl: './card-anuncio.component.html',
  styleUrls: ['./card-anuncio.component.css']
})
export class CardAnuncioComponent implements OnInit {
  @Input() anuncio_id=0;
  @Input() name = '';
  @Input() imagen = '';
  @Input() description = '';
  @Input() url = '';

  baseURL = AppConstants.baseURL;

  ngOnInit() {

  }
}
