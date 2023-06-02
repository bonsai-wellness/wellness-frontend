import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from 'src/app/Service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-punto-importante',
  templateUrl: './select-punto-importante.component.html',
  styleUrls: ['./select-punto-importante.component.css']
})
export class SelectPuntoImportanteComponent implements OnInit {

  @Input() espacio_id = '';

  arrDeportes: any;
  arrPuntosImportantes: any;

  formPuntoImportante: FormGroup;
  listOfSelectedPuntos = [];

  constructor(
    private _apiservice: ApiserviceService,
    public formularioPuntoImportante: FormBuilder,
    private message: NzMessageService
  ) {
    this.formPuntoImportante = this.formularioPuntoImportante.group({
      name: [""],
    });
  }

  ngOnInit() {
    this._apiservice.getAllPuntosImportantes().subscribe((res) => {
      this.arrPuntosImportantes = res;
    });
  }

  refresh() {
    this._apiservice.getAllPuntosImportantes().subscribe((res) => {
      this.arrPuntosImportantes = res;
    });
  }

  handleAddPuntoImportante(): void {
    try {
      if (this.formPuntoImportante.value.name === "") {
        this.message.create(
          "warning",
          "Para crear un punto importante es necesario ingresar un nombre"
        );
        return;
      }

      this._apiservice
        .addPuntoImportante(this.formPuntoImportante.value)
        .subscribe((res) => {
          this.refresh();
        });
      this.formPuntoImportante = this.formularioPuntoImportante.group({
        name: [""],
      });
      this.message.create("success", `Punto importante creado con éxito`);
    } catch (error) {
      this.message.create("error", `No fue posible crear el punto importante`);
    }
  }

  onSelectPuntoImportante(event: any) {

  }

  cancelDelete(): void {
    console.log('click cancel');
  }

  confirmDelete(): void {
    console.log('click confirm');
  }

}

