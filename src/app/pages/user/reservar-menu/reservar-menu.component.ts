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
    console.log("Reserva")

    this._apiservice.getAllDeportes().subscribe(res => { 
      // this.espaciosPadre=res;
      console.log(res);
      this.newData = res; 
    })
  
  }

  deportes: Deporte[]=[
    {
      deporte_id: 0,
      created_at: "",
      updated_at: "",
      nombre: 'Tenis',
      imagen: "../../../../assets/reservafondo.png",
    },
    {
      deporte_id: 1,
      created_at: "",
      updated_at: "",
      nombre: 'Futbol',
      imagen: "../../../../assets/espaciosfondo.png",
    },
    {
      deporte_id: 2,
      created_at: "",
      updated_at: "",
      nombre: 'Basketball',
      imagen: "../../../../assets/basket.jpeg",
    },
    {
      deporte_id: 3,
      created_at: "",
      updated_at: "",
      nombre: 'Volleyball',
      imagen: "../../../../assets/volley.jpeg",
    },

  ];
}
