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
  ) { }

  fecha: any;
  hora_inicio: any;
  hora_final: any;
  nombre_espacio: any;
  code_espacio: any;
  nombre_espacio_padre: any;
  reservacion_id: any;

  ngOnChanges() {
    // Si recibe los datos de la reservacion llama setDisplayData
    if (this.displayReservacion) {
      this.setDisplayData();
    }
  }

  // Da formato a los datos de reservacion para mostrarlos
  setDisplayData() {
    this.fecha = this.formatoFecha(this.displayReservacion.date);
    this.hora_inicio = this.displayReservacion.start_time.slice(0, 5);
    this.hora_final = this.displayReservacion.end_time.slice(0, 5);
    this.nombre_espacio_padre = this.displayReservacion.name;
    this.nombre_espacio = this.displayReservacion.ename;
    this.reservacion_id = this.displayReservacion.reservation_id;
  }

  // Da formato a la fecha
  formatoFecha(fecha: string): string {
    const [year, month, day] = fecha.split('-');
    const parsedMonth = parseInt(month);
    const abbreviatedMonth = this.getMesAbreviado(parsedMonth);

    return `${day} ${abbreviatedMonth}`;
  }

  // Obtiene el mes abreviado
  getMesAbreviado(numeroMes: number): string {
    const date = new Date(0, numeroMes - 1);
    const nombreMes = date.toLocaleString('es-ES', { month: 'short' });
    const nombreMayusMes = nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);
    return nombreMayusMes;
  }

  // Accion de no confirmar reservacion
  cancel(): void {
    this.nzMessageService.info('Cancelación no confirmada');
  }

  // Accion de confirmar la cancelacion de reservacion
  confirm(): void {
    this._apiservice.deleteReservacion(this.reservacion_id).subscribe(() => { });
    this.nzMessageService.info('Reservación Cancelada Correctamente');
    this.refresh();
  }

  // Actualiza la pagina despues de cancelar reservacion
  refresh() :void {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
