import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { NzMarks } from "ng-zorro-antd/slider";
import { EspacioPadre } from "src/app/models/espacioPadre/espacioPadre";
import { ApiserviceService } from "src/app/Service";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzTabsCanDeactivateFn } from "ng-zorro-antd/tabs";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AnyCatcher } from "rxjs/internal/AnyCatcher";
import { NzMessageService } from "ng-zorro-antd/message";
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
    public formularioPuntoImportante: FormBuilder,
    private message: NzMessageService
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
    try {
      if (
        this.formEspacioPadre.value.name === "" ||
        this.formEspacioPadre.value.code === "" ||
        this.formEspacioPadre.value.map_url === ""
      ) {
        this.message.create("warning", `Todos los campos deben estar llenos`);
        return;
      }

      this._apiservice
        .addEspacioPadre(this.formEspacioPadre.value)
        .subscribe((res) => {
          console.log("handleAddEspacioPadre");
          console.log(res);
          this.refresh();
        });
      this.message.create("success", `Espacio Padre creado con éxito`);
      this.isVisibleEspacioPadreModal = false;
      this.resetVars();
    } catch (error) {
      console.log(error);
      this.message.create("error", `No fue posible crear el espacio padre`);
    }
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
        console.log("handleAddDeporte");
        console.log(res);
        this.refresh();
      });
      this.formDeporte = this.formularioDeporte.group({
        name: [""],
        imagen: [File],
      });
      this.message.create("success", `Deporte creado con éxito`);
    } catch (error) {
      console.log(error);
      this.message.create("error", `No fue posible crear el deporte`);
    }
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
          console.log("handleAddPuntoImportante");
          console.log(res);
          this.refresh();
        });
      this.formPuntoImportante = this.formularioPuntoImportante.group({
        name: [""],
      });
      this.message.create("success", `Punto importante creado con éxito`);
    } catch (error) {
      console.log(error);
      this.message.create("error", `No fue posible crear el punto importante`);
    }
  }

  handleAddEspacio() {
    console.log(this.formEspacio.value);
    console.log(this.listOfSelectedDeportes);
    console.log(this.listOfSelectedPuntos);
    try {
      if (
        this.formEspacio.value.name === "" ||
        this.formEspacio.value.code === "" ||
        this.formEspacio.value.capacity === "" ||
        this.formEspacio.value.time_max === "" ||
        this.formEspacio.value.details === "" ||
        this.formEspacio.value.espacio_padre_id === 0 ||
        this.formEspacio.value.imagen === ""
      ) {
        this.message.create("warning", `Todos los campos deben estar llenos`);
        return;
      }
      this._apiservice.addEspacio(this.formEspacio.value).subscribe((res) => {
        console.log("handleAddEspacio");
        console.log(res);
        this.refresh();
      });
      this.isVisibleEspacioModal = false;
      this.resetVars();
      this.message.create("success", `Espacio creado con éxito`);
    } catch (error) {
      this.message.create("error", `No fue posible crear el espacio`);
    }
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
