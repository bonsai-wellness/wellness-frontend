import { Component, Input, OnChanges } from '@angular/core';
import { ApiserviceService } from 'src/app/Service';
import { NzModalService } from "ng-zorro-antd/modal";

@Component({
  selector: 'app-puntos-importantes',
  templateUrl: './puntos-importantes.component.html',
  styleUrls: ['./puntos-importantes.component.css']
})
export class PuntosImportantesComponent implements OnChanges{
  @Input() espacio_id: any;

  puntosImportantes: any;
  formattedPuntosImportantes: any;

  constructor(
    private _apiservice: ApiserviceService,
    private modal: NzModalService
    ){}

  

  ngOnChanges(){

    // Obtiene el punto importante por espacio
    if(this.espacio_id){
      this._apiservice.getPuntosImportantesByEspacio(this.espacio_id).subscribe((res) =>{
        this.puntosImportantes = res;

        this.setFormattedPuntosImportantes();
      })
    }
    
  }

  // Define el formato de los puntos importantes para desplegar
  setFormattedPuntosImportantes(){
    this.formattedPuntosImportantes = this.puntosImportantes.map((puntoImportante:any) => `<p>${puntoImportante.name}</p>`).join('');
  }

  // Despliega el pop up de puntos importnates
  info(): void {
    // Define titulo y contenido
    this.modal.info({
      nzTitle: 'Puntos importantes',
      nzContent: this.formattedPuntosImportantes,
    });
  }


}
