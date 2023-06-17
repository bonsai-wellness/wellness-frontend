// select-espacio-padre.component.ts
// Componente de la lista seleccionable de espacios padre
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-select-espacio-padre' al componente
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiserviceService } from 'src/app/Service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-select-espacio-padre',
  templateUrl: './select-espacio-padre.component.html',
  styleUrls: ['./select-espacio-padre.component.css']
})
export class SelectEspacioPadreComponent implements OnInit {
  @Input() espacio_id = '';
  list =[];
  @Output() espacio_padre_id = new EventEmitter<string>();
  @Output() listOfSelectedEspacioPadre = new EventEmitter<string>();

  arrEspacioPadre: any;

  constructor(
    private _apiservice: ApiserviceService,
    private message: NzMessageService
  ) {
  }

  ngOnInit() {
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });
  }

  refresh() {
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });
  }
  onSelectEspacio(event: any) {
    this.espacio_padre_id.emit(event);
  }

}
