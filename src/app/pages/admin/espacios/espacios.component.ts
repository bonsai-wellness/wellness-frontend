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
import { ThisReceiver } from "@angular/compiler";
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
  listOfSelectedDeportes = [];
  listOfSelectedPuntos = [];
  openAt = new Date();
  closeAt = new Date();
  first_tab=1;

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
      deportes_ids: [[]],
      puntos_importantes_ids: [[]],
    });
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
          this.refresh();
        });
      this.message.create("success", `Espacio Padre creado con éxito`);
      this.isVisibleEspacioPadreModal = false;
      this.resetVars();
    } catch (error) {
      this.message.create("error", `No fue posible crear el espacio padre`);
    }
  }

  async handleAddEspacio() {
    try {
      if (
        this.formEspacio.value.name === "" ||
        this.formEspacio.value.code === "" ||
        this.formEspacio.value.capacity === "" ||
        this.formEspacio.value.time_max === "" ||
        this.formEspacio.value.details === "" ||
        this.formEspacio.value.espacio_padre_id === 0 ||
        this.formEspacio.value.imagen === "" || 
        this.formEspacio.value.deportes_ids.length < 1 ||
        this.formEspacio.value.puntos_importantes_ids.length < 1
      ) {
        this.message.create("warning", `Todos los campos deben estar llenos`);
        return;
      }
      this._apiservice.addEspacio(this.formEspacio.value).subscribe(async (res) => {
        await this.formEspacio.value.deportes_ids.map(async (id: number)=>{
          await this.addRelDeporte(res.espacio_id, id)
        });
        await this.formEspacio.value.puntos_importantes_ids.map(async (id: number)=>{
          await this.addRelPuntoImportante(res.espacio_id, id)
        })

        this.refresh();
      });
      
      this.isVisibleEspacioModal = false;
      this.resetVars();
      this.message.create("success", `Espacio creado con éxito`);
    } catch (error) {
      this.message.create("error", `No fue posible crear el espacio`);
    }
  }

  async addRelDeporte(espacio_id:number, deporte_id: number) {
    try {
      let body={
        espacio_id,
        deporte_id,
      }
      this._apiservice.relEspacioDeporte(body).subscribe((res) => {
      });
    } catch (error) {
      this.message.create("error", `No fue posible agregar el deporte`);
    }
  }

  async addRelPuntoImportante(espacio_id:number, punto_importante_id: number) {
    try {
      let body={
        espacio_id,
        punto_importante_id,
      }
      this._apiservice.relEspacioPuntoImportante(body).subscribe((res) => {
      });
    } catch (error) {
      this.message.create("error", `No fue posible agregar el punto importante`);
    }
  }

  handleCancel(): void {
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
      deportes_ids: [[]],
      puntos_importantes_ids: [[]],
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


  addFileEspacio(newItem: string) {
    this.formEspacio.get("imagen")?.setValue(newItem);
  }

  onSelectEspacio(){

  }

  addList(event:any, type:string){
    if(type=== 'deporte'){
      this.formEspacio.patchValue({
        deportes_ids: event, 
      }); 
    }else if(type ==='espacio-padre'){
      this.formEspacio.patchValue({
        espacio_padre_id: event.espacio_padre_id, 
      }); 
    }else if(type ==='punto'){
      this.formEspacio.patchValue({
        puntos_importantes_ids: event, 
      }); 
    }
   }

}

