// select-deporte.component.ts
// Componente de la lista seleccionable de deportes
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-select-deporte' al componente
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from 'src/app/Service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormGroup } from '@angular/forms';
import { NzSelectModeType } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-select-deporte',
  templateUrl: './select-deporte.component.html',
  styleUrls: ['./select-deporte.component.css'],
})
export class SelectDeporteComponent implements OnInit {
  arrDeportes: any;
  formDeporte: FormGroup;
  modalVisible=false;
  list =[];
  @Input() multiple:NzSelectModeType = 'multiple';
  @Output() listOfSelectedDeportes = new EventEmitter<string[]>();

  constructor(
    private _apiservice: ApiserviceService,
    public formularioDeporte: FormBuilder,
    private message: NzMessageService
  ) {
    this.formDeporte = this.formularioDeporte.group({
      name: [""],
      imagen: [File],
    });
  }

  ngOnInit() {
    this._apiservice.getAllDeportes().subscribe((res) => {
      this.arrDeportes = res;
    });
  }

  refresh() {
    this._apiservice.getAllDeportes().subscribe((res) => {
      this.arrDeportes = res;
    });
  }

  onSelectDeporte(event: any) {
    this.listOfSelectedDeportes.emit(event);
  }

  addFileDeporte(event: any) {
    let files = event.target.files as FileList;
    let file: any;
    file = files.item(0);
    this.formDeporte.get("imagen")?.setValue(file);
  }

  handleAddDeporte(): void {
    try {
      if (
        this.formDeporte.value.name === "" ||
        this.formDeporte.value.imagen.name === "File"
      ) {
        this.message.create(
          "warning",
          "Para crear un deporte es necesario ingresar nombre y una imágen"
        );
        return;
      }

      this._apiservice.addDeporte(this.formDeporte.value).subscribe((res) => {
        this.refresh();
      });
      this.formDeporte = this.formularioDeporte.group({
        name: [""],
        imagen: [File],
      });
      this.message.create("success", `Deporte creado con éxito`);
    } catch (error) {
      this.message.create("error", `No fue posible crear el deporte`);
    }
  }

  handleDelete(){
    this.modalVisible=true;
  }

}
