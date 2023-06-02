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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.espaciosHijo && this.espaciosPadre) {
      // Agregar items para acordeon
      for (let i = 0; i < this.espaciosPadre.length; i++) {
        this.agregarEspacioPadre(this.espaciosPadre[i]);
      }
    }
  }

  agregarEspacioPadre(espacioPadre: EspacioPadre): void {
    let itemPanel = {
      active: false,
      espacioPadre: {},
      espaciosHijo: [],
      disabled: false
    }

    const espaciosHijoPorPadre = this.espaciosHijo.filter((d: any) => d.espacio_padre_id === espacioPadre.espacio_padre_id);
    itemPanel.espacioPadre = espacioPadre;
    itemPanel.espaciosHijo = espaciosHijoPorPadre;

    this.panels.push(itemPanel);

  }

}
