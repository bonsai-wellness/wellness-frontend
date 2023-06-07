import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent {
  reservaciones: any;
  displayReservacion: any;

  today = new Date().toISOString().split('T')[0];

  emptyReservations = {
    ename: "No hay reservaciones",
    date: this.today,
    start_time: "",
    end_time: "",
    name: "",
  }

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
    })
  }

  setDisplayData() {
    this.fecha = this.formatoFecha(this.displayReservacion.date);
    this.hora_inicio = this.displayReservacion.start_time.slice(0, 5);
    this.hora_final = this.displayReservacion.end_time.slice(0, 5);
    this.nombre_espacio_padre = this.displayReservacion.name;
    this.nombre_espacio = this.displayReservacion.ename;
  }

  formatoFecha(fecha: string): string {
    const [year, month, day] = fecha.split('-');
    const parsedMonth = parseInt(month);
    const abbreviatedMonth = this.getMesAbreviado(parsedMonth);

    return `${day} ${abbreviatedMonth}`;
  }

  getMesAbreviado(numeroMes: number): string {
    const date = new Date(0, numeroMes - 1);

    const nombreMes = date.toLocaleString('es-ES', { month: 'short' });
    const nombreMayusMes = nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);

    return nombreMayusMes;
  }

  agregarDisplayReservas(){
    if(this.reservaciones.length >0){
      this.displayReservacion = this.reservaciones[0];
    }else{
      this.displayReservacion = this.emptyReservations;
    }
    this.setDisplayData();
  }

}
