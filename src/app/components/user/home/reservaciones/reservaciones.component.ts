import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent {
  reservaciones: any;
  displayReservaciones: any;

  fecha: any;
  hora_inicio:any;
  hora_final:any;
  nombre_espacio:any;
  code_espacio: any;
  nombre_espacio_padre:any;
  espacioHijo: any;
  constructor(private _apiservice: ApiserviceService){}
  
  ngOnInit() {

    this._apiservice.getMisReservaciones().subscribe( (res) =>{
      this.reservaciones = res;

      this.agregarDisplayReservas();
      // console.log(this.displayReservaciones);
      // if(this.displayReservaciones.reservacion){
      //   this.setDisplayData();
      // }
    })
    
  }

  ngOnChanges(){
    if(this.displayReservaciones){
      console.log(this.displayReservaciones);
      // this.setDisplayData();
    }
  }

  // setDisplayData(){
  //   this.fecha = this.formatoFecha(this.displayReservaciones.reservacion.date);
  //   this.hora_inicio = this.displayReservaciones.reservacion.start_time.slice(0, 5);
  //   this.hora_final = this.displayReservaciones.reservacion.end_time.slice(0, 5);
  //   this.nombre_espacio_padre = this.displayReservaciones.reservacion.name;
  //   this.nombre_espacio = this.displayReservaciones.espacio.name;
  //   this.code_espacio = this.displayReservaciones.espacio.code;
  // }

  formatoFecha(fecha: string): string {
    const date = new Date(fecha);

    const month = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based months (0-11)
    const day = date.getDate();

    return `${day} ${this.getMesAbreviado(month)}`;
  }

  getMesAbreviado(numeroMes: number): string {
    const date = new Date();
    date.setMonth(numeroMes - 1); // Set the month (subtract 1 because months are zero-based)

    const nombreMes = date.toLocaleString('es-ES', { month: 'short' });
    const nombreMayusMes = nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);

    return nombreMayusMes;
  }

  agregarDisplayReservas(){
    if(this.reservaciones.length >0){
      let espacio = this.getEspacioReservado(this.reservaciones[0].espacio_id);
      console.log("espacio",espacio);
      this.displayReservaciones = 
        {
          espacio: espacio, 
          reservacion: this.reservaciones[0]
        }
        ;
      this.hora_inicio = this.displayReservaciones.reservacion.start_time.slice(0, 5);
    this.hora_final = this.displayReservaciones.reservacion.end_time.slice(0, 5);
    }
  }

  getEspacioReservado(id: number): any{
    
    console.log("bef")
    this._apiservice.getAllEspaciosHijo().subscribe( (res) =>{
      const response= res as []; 
      let espacio: any = response.find((espaciosHijo: any) => espaciosHijo.espacio_id == id);
      console.log("id",id, res, espacio);
      this.espacioHijo = espacio;
      return espacio;
    })
    
  }
}
