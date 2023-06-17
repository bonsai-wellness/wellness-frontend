//espacio-details.ts
// Pantalla de detalles de espacios, información y su rreservación
//  El componente define la plantilla html de los componentes y estilos css
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ApiserviceService } from "src/app/Service";

@Component({
  selector: "app-espacio-details",
  templateUrl: "./espacio-details.component.html",
  styleUrls: ["./espacio-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EspacioDetailsComponent implements OnInit {
  espacio: any;
  param_id: any;
  todayReservations: any;
  pastReservations: any;
  nextReservations: any;

  //Metodo constructor para la ruta y el servicio de api donde se declaran todas las llamadas al API
  constructor(private route: ActivatedRoute, private location: Location, private _apiservice: ApiserviceService) {
    let params: any = this.location.getState();
  }

  // Al inicializar la pantalla se realizan 3 llamadasa GET
  // Para traer todas las reservaciones de hoy
  // para traer todas las reservaciones pasadas
  // para traer todas las reservaciones proximas
  ngOnInit(): void {
    this.param_id = this.route.snapshot.paramMap.get("espacio_id");
    this.espacio = this.location.getState();
    this._apiservice.getTodayReservations(this.param_id).subscribe(res => { 
      this.todayReservations = res; 
    });
    this._apiservice.getPastReservations(this.param_id).subscribe(res => { 
      this.pastReservations = res; 
    });
    this._apiservice.getNextReservations(this.param_id).subscribe(res => { 
      this.nextReservations = res; 
    });
  }
}
