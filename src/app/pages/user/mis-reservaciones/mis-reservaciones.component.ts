import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Service';

@Component({
  selector: 'app-mis-reservaciones',
  templateUrl: './mis-reservaciones.component.html',
  styleUrls: ['./mis-reservaciones.component.css']
})

export class MisReservacionesComponent implements OnInit{
  public title:string = "Reservaciones";
  reservaciones: any;
  displayReservaciones: any[] = [];
  constructor(private _apiservice: ApiserviceService){}
  
  ngOnInit() {
    document.title = this.title;
    console.log("mis");
    this._apiservice.getMisReservaciones().subscribe( (res) =>{
      console.log("res", res);
      this.reservaciones = res;

      this.agregarDisplayReservas();
    })
    
  }

  agregarDisplayReservas(){
    for (let i = 0; i < this.reservaciones.length; i++) {
      let espacio = this.getEspacioReservado(this.reservaciones[i].espacio_id);

      this.displayReservaciones.push(
        {
          espacio: espacio, 
          reservacion: this.reservaciones[i]
        }
        );
    }
  }

  // getEspacioReservado(id: number): any{
  //   let espacio;
  //   console.log("bef")
  //   this._apiservice.getEspacioDeporte(id).subscribe( (res) =>{
  //     console.log(id, res);
  //     espacio = res;
  //     return espacio;
  //   })
    
  // }

  // getEspacioReservado(id: number): any{
    
  //   console.log("bef")
  //   this._apiservice.getAllEspaciosHijo().subscribe( (res) =>{
  //     const response= res as []; 
  //     let espacio: any = response.find((espaciosHijo: any) => espaciosHijo.espacio_id == id);
  //     console.log(id, res);
  //     return espacio;
  //   })
    
  // }

  getEspacioReservado(id: number): any{
    
    console.log("bef")
    this._apiservice.getAllEspaciosHijo().subscribe( (res) =>{
      const response= res as []; 
      let espacio: any = response.find((espaciosHijo: any) => espaciosHijo.espacio_id == id);
      console.log("id",id, res, espacio);
      // this.espacioHijo = espacio;
      return espacio;
    })
    
  }

}
