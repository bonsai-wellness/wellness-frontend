import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { NzMarks } from "ng-zorro-antd/slider";
import { EspacioPadre } from "src/app/models/espacioPadre/espacioPadre";
import { ApiserviceService } from "src/app/Service";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzTabsCanDeactivateFn } from "ng-zorro-antd/tabs";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AnyCatcher } from "rxjs/internal/AnyCatcher";
// import DeporteImage from  '../../../../assets/login_image-jpeg';

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
  arrDeportes: any;
  arrPuntosImportantes: any;
  espaciosPadre: EspacioPadre[] = [];
  users: any;
  padre: any;
  formEspacioPadre: FormGroup;
  formEspacio: FormGroup;
  formDeporte: FormGroup;
  formPuntoImportante: FormGroup;
  listOfSelectedDeportes = [];
  listOfSelectedPuntos = [];
  openAt = new Date();
  closeAt = new Date();

  constructor(
    private _apiservice: ApiserviceService,
    private modal: NzModalService,
    public formularioEspacioPadre: FormBuilder,
    public formularioEspacio: FormBuilder,
    public formularioDeporte: FormBuilder,
    public formularioPuntoImportante: FormBuilder
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
      capacity: [""],
      time_max: [""],
      details: [""],
      open_at: [new Date()],
      close_at: [new Date()],
      espacio_padre_id: [0],
      is_active: ["T"],
      imagen: [""],
      deporte_id: [0],
      puntos_importantes_ids: [0],
    });
    this.formDeporte = this.formularioDeporte.group({
      name: [""],
      imagen: [File],
    });
    this.formPuntoImportante = this.formularioPuntoImportante.group({
      name: [""],
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
    this._apiservice
      .addEspacioPadre(this.formEspacioPadre.value)
      .subscribe((res) => {
        console.log("handleAddEspacioPadre");
        console.log(res);
        this.refresh();
      });
    this.isVisibleEspacioPadreModal = false;
    this.resetVars();
  }

  handleAddDeporte(): void {
    this._apiservice.addDeporte(this.formDeporte.value).subscribe((res) => {
      console.log("handleAddDeporte");
      console.log(res);
      this.refresh();
    });
    this.formDeporte = this.formularioDeporte.group({
      name: [""],
      imagen: [File],
    });
  }

  handleAddPuntoImportante(): void {
    this._apiservice
      .addPuntoImportante(this.formPuntoImportante.value)
      .subscribe((res) => {
        console.log("handleAddPuntoImportante");
        console.log(res);
        this.refresh();
      });
    this.formPuntoImportante = this.formularioPuntoImportante.group({
      name: [""],
    });
  }

  handleAddEspacio() {
    console.log(this.formEspacio.value);
    console.log(this.listOfSelectedDeportes);
    console.log(this.listOfSelectedPuntos);
    this._apiservice.addEspacio(this.formEspacio.value).subscribe((res) => {
      console.log("handleAddEspacio");
      console.log(res);
      this.refresh();
    });
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisibleEspacioPadreModal = false;
    this.isVisibleEspacioModal = false;
    this.resetVars();
  }

  resetVars(): void {
    this.listOfSelectedDeportes = [];
    this.listOfSelectedPuntos = [];
    this.formEspacioPadre = this.formularioEspacioPadre.group({
      name: [""],
      code: [""],
      map_url: [""],
      is_active: ["T"],
    });
    this.formEspacio = this.formularioEspacio.group({
      name: [""],
      code: [""],
      capacity: [""],
      time_max: [""],
      details: [""],
      open_at: [new Date()],
      close_at: [new Date()],
      espacio_padre_id: [0],
      is_active: ["T"],
      imagen: [""],
      deporte_id: [0],
      puntos_importantes_ids: [0],
    });
    this.formDeporte = this.formularioDeporte.group({
      name: [""],
      imagen: [File],
    });
    this.formPuntoImportante = this.formularioPuntoImportante.group({
      name: [""],
    });
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
    console.log(this.listOfSelectedDeportes);
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

  addFileEspacio(newItem: string) {
    this.formEspacio.get("imagen")?.setValue(newItem);
  }

  addFileDeporte(event: any) {
    let files = event.target.files as FileList;
    let file: any;
    file = files.item(0);
    this.formDeporte.get("imagen")?.setValue(file);
  }
}
