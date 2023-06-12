import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Service';

@Component({
  selector: 'app-mis-reservaciones',
  templateUrl: './mis-reservaciones.component.html',
  styleUrls: ['./mis-reservaciones.component.css']
})

export class MisReservacionesComponent implements OnInit{
  public title:string = "Reservaciones";
  reservaciones: any = [];
  constructor(private _apiservice: ApiserviceService){}
  
  ngOnInit() {
    document.title = this.title;

    this._apiservice.getMisReservaciones().subscribe( (res) =>{
      this.reservaciones = res;
    })
    
  }

}
