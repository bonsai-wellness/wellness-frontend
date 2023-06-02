import { Component, Input, OnChanges } from '@angular/core';
import { ApiserviceService } from 'src/app/Service';

@Component({
  selector: 'app-puntos-importantes',
  templateUrl: './puntos-importantes.component.html',
  styleUrls: ['./puntos-importantes.component.css']
})
export class PuntosImportantesComponent implements OnChanges{
  @Input() espacio: any;

  puntosImportantes: any;

  constructor(private _apiservice: ApiserviceService){}

  ngOnChanges(){

    if(this.espacio){
      const espacio_id = this.espacio[0].espacio_id;
      this._apiservice.getPuntosImportantesByEspacio(espacio_id).subscribe((res) =>{
        this.puntosImportantes = res;
      })
    }
    
  }


}
