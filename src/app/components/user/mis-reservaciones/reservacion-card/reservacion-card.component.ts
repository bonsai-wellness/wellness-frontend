import { Component, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiserviceService } from 'src/app/Service';
@Component({
  selector: 'app-reservacion-card',
  templateUrl: './reservacion-card.component.html',
  styleUrls: ['./reservacion-card.component.css'],
})
export class ReservacionCardComponent {
  @Input() displayReservacion: any;

  constructor(
    private nzMessageService: NzMessageService,
    private _apiservice: ApiserviceService
    ){}

  fecha: any;
  hora_inicio:any;
  hora_final:any;
  nombre_espacio:any;
  code_espacio: any;
  nombre_espacio_padre:any;
  espacioHijo:any;
  reservacion_id: any;

  ngOnChanges(){
    if(this.displayReservacion){
      console.log(this.displayReservacion);
      this.setDisplayData();
    }

    
  }

  setDisplayData(){
    console.log("displayData", this.displayReservacion);
    this.fecha = this.formatoFecha(this.displayReservacion.reservacion.date);
    this.hora_inicio = this.displayReservacion.reservacion.start_time.slice(0, 5);
    this.hora_final = this.displayReservacion.reservacion.end_time.slice(0, 5);
    this.nombre_espacio_padre = this.displayReservacion.reservacion.name;
    this.nombre_espacio = this.displayReservacion.espacio.name;
    this.code_espacio = this.displayReservacion.espacio.code;
    this.getEspacioReservado(this.displayReservacion.reservacion.espacio_id);

    this.reservacion_id = this.displayReservacion.reservacion.reservation_id;
  }

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

  getEspacioReservado(id: number){
    
    console.log("bef")
    this._apiservice.getAllEspaciosHijo().subscribe( (res) =>{
      const response= res as []; 
      let espacio: any = response.find((espaciosHijo: any) => espaciosHijo.espacio_id == id);
      console.log("id",id, res, espacio);
      this.espacioHijo = espacio.name;
      // return espacio;
    })
    
  }

  cancel(): void {
    this.nzMessageService.info('Cancelación no confirmada');
  }

  confirm(): void {
    console.log(this.displayReservacion.reservacion.reservation_id);
    this._apiservice.deleteReservacion(this.reservacion_id);
    this.nzMessageService.info('Reservación Cancelada Correctamente');
  }
}
