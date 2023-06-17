import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EspacioPadre } from 'src/app/models/espacioPadre/espacioPadre';
import { ApiserviceService } from 'src/app/Service';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-espacios-padre',
  templateUrl: './espacios-padre.component.html',
  styleUrls: ['./espacios-padre.component.css']
})

export class EspaciosPadreComponent implements OnChanges {

  constructor(private _apiservice: ApiserviceService) { }
  @Input() espaciosPadre: any;
  @Input() espaciosHijo: any;
  panels: any[] = [];
  
  // Funcion que se implementa cuando recibe los valores el componente
  ngOnChanges(changes: SimpleChanges): void {
    
    if (this.espaciosHijo && this.espaciosPadre) {
      // Agregar items para acordeon que despliega la lista de espacios
      for (let i = 0; i < this.espaciosPadre.length; i++) {
        this.agregarEspacioPadre(this.espaciosPadre[i]);
      }
    }
  }

  // Agrega un espacio padre a la lista
  agregarEspacioPadre(espacioPadre: EspacioPadre): void {
    // Opciones de cada item
    let itemPanel = {
      active: false,
      espacioPadre: {},
      espaciosHijo: [],
      disabled: false
    }

    // Espacios Hijo por cada espacio Padre
    const espaciosHijoPorPadre = this.espaciosHijo.filter((d: any) => d.espacio_padre_id === espacioPadre.espacio_padre_id);
    
    // Agrega espacio padre
    itemPanel.espacioPadre = espacioPadre;
    
    // Agrega espacio hijo
    itemPanel.espaciosHijo = espaciosHijoPorPadre;

    // Agrega item
    this.panels.push(itemPanel);

  }

}
