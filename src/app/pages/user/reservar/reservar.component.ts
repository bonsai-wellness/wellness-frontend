import { Component } from '@angular/core';
import { Deporte } from 'src/app/models/deporte/deporte';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {
  public title:string = "Reserva";

  ngOnInit() {
    document.title = this.title;
    console.log("Reserva")
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
