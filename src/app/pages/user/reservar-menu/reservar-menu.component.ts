import { Component } from '@angular/core';
import { Deporte } from 'src/app/models/deporte/deporte';
import { ApiserviceService } from 'src/app/Service';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar-menu.component.html',
  styleUrls: ['./reservar-menu.component.css']
})
export class ReservarMenuComponent {
  public title:string = "Reserva";
  newData:any;
  baseURL = AppConstants.baseURL;
  
  constructor(private _apiservice: ApiserviceService){}

  ngOnInit() {
    document.title = this.title;
    this._apiservice.getAllDeportes().subscribe(res => { 
      // this.espaciosPadre=res;
      this.newData = res; 
    })
  
  }

  deportes: Deporte[]=[
    {
      deporte_id: 0,
      created_at: "",
      updated_at: "",
      name: 'Tenis',
      imagen: "../../../../assets/reservafondo.png",
    },
    {
      deporte_id: 1,
      created_at: "",
      updated_at: "",
      name: 'Futbol',
      imagen: "../../../../assets/espaciosfondo.png",
    },
    {
      deporte_id: 2,
      created_at: "",
      updated_at: "",
      name: 'Basketball',
      imagen: "../../../../assets/basket.jpeg",
    },
    {
      deporte_id: 3,
      created_at: "",
      updated_at: "",
      name: 'Volleyball',
      imagen: "../../../../assets/volley.jpeg",
    },

  ];
}
