import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { NzMarks } from "ng-zorro-antd/slider";
import { EspacioPadre } from "src/app/models/espacioPadre/espacioPadre";
import { ApiserviceService } from "src/app/Service";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzTabsCanDeactivateFn } from "ng-zorro-antd/tabs";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AnyCatcher } from "rxjs/internal/AnyCatcher";

@Component({
  selector: "app-espacios",
  templateUrl: "./espacios.component.html",
  styleUrls: ["./espacios.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EspaciosComponent implements OnInit {
  isVisibleEspacioPadreModal = false;
  isVisibleEspacioModal = false;
  arrEspacioPadre: any;
  arrDeportes:any;
  arrPuntosImportantes:any;
  espaciosPadre: EspacioPadre[] = [];
  users: any;
  padre: any;
  formEspacioPadre: FormGroup;
  formEspacio: FormGroup;
  listOfSelectedValue = [];

  constructor(
    private _apiservice: ApiserviceService,
    private modal: NzModalService,
    public formularioEspacioPadre: FormBuilder,
    public formularioEspacio : FormBuilder,

  ) {
    this.formEspacioPadre = this.formularioEspacioPadre.group({
      name: [""],
      code: [""],
      map_url: [""],
      is_active: ["T"],
    });
    this.formEspacio = this.formularioEspacio.group({
      name: [""],
      code: [""],
      capacity: [0],
      time_max: [0],
      details:[""],
      open_at: [""],
      close_at:[""],
      espacio_padre_id: [0],
      is_active: [""],
      imagen: [''],
      deporte_id:[0],
      puntos_importantes_ids:[0],
    });
  }

  ngOnInit() {
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });

    this._apiservice.getAllDeportes().subscribe((res) => {
      this.arrDeportes = res;
    });
    this._apiservice.getAllPuntosImportantes().subscribe((res) => {
      this.arrPuntosImportantes = res;
    });
  }

  refresh() {
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });

    this._apiservice.getAllDeportes().subscribe((res) => {
      this.arrDeportes = res;
    });
    this._apiservice.getAllPuntosImportantes().subscribe((res) => {
      this.arrPuntosImportantes = res;
    });
  }

  showEspacioPadreModal(): void {
    this.isVisibleEspacioPadreModal = true;
  }

  showEspacioModal(): void {
    this.isVisibleEspacioModal = true;
  }

  handleAddEspacioPadre(): void {
    console.log("Button ok clicked!");
    console.log(this.formEspacioPadre.value);
    this._apiservice
      .addEspacioPadre(this.formEspacioPadre.value)
      .subscribe((respuesta) => {
        console.log("Post espacio padre");
      });
    this.isVisibleEspacioPadreModal = false;
  }

  handleAddDeporte(input: HTMLInputElement): void {
    const value = input.value;
    console.log(value);
    if (this.arrDeportes.indexOf(value) === -1) {
      this.arrDeportes = [...this.arrDeportes, input.value || `New item ${this.arrDeportes++}`];
    }
  }

  handleAddPuntoImportante(input: HTMLInputElement):void{
    const value = input.value;
    console.log(value);
  }

  handleAddEspacio(){
    console.log(this.formEspacio.value);
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisibleEspacioPadreModal = false;
    this.isVisibleEspacioModal = false;
  }

  //Espacio Padre modal
  openEspacioPadreModal: NzTabsCanDeactivateFn = (
    fromIndex: number,
    toIndex: number
  ) => {
    if (toIndex >= this.arrEspacioPadre.length) {
      return this.confirmOpenEspacioPadreModal();
    } else {
      return true;
    }
  };

  private confirmOpenEspacioPadreModal(): Observable<boolean> {
    return new Observable((observer) => {
      this.isVisibleEspacioPadreModal = true;
    });
  }

  espacioOptions = [];

  onSelectEspacio(val: any) {
    // if (val) {
    //   this.espacioOptions = [];
    //   this.arrEspacioPadre.map((res:any) => {
    //     if(res.name == val){
    //       this.espacioOptions = res.name;
    //     }
    //   });
    // }
  }

  onSelectDeporte(event: any) {
    console.log(this.listOfSelectedValue);
    console.log(event);
    // if (val) {
    //   this.espacioOptions = [];
    //   this.arrEspacioPadre.map((res:any) => {
    //     if(res.name == val){
    //       this.espacioOptions = res.name;
    //     }
    //   });
    // }
  }

  addFile(newItem: string) {
    // this.items.push(newItem);
    console.log(newItem);
    this.formEspacio.get('imagen')?.setValue(newItem);
  }
}
