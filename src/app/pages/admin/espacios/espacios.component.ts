// espacios.component.ts
// Archivo de la pantalla de espacios
// Manipula los modales, las pestañas de espacios padre y las tarjetas de espacio 
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { EspacioPadre } from "src/app/models/espacioPadre/espacioPadre";
import { ApiserviceService } from "src/app/Service";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzTabsCanDeactivateFn } from "ng-zorro-antd/tabs";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";

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

  // Metodo constructor donnde se declaran todos los formularios a usar en la pantalla,
  // el servico de API, modales y mensajes de validación
  constructor(
    private _apiservice: ApiserviceService,
    private modal: NzModalService,
    public formularioEspacioPadre: FormBuilder,
    public formularioEspacio: FormBuilder,
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

  // Se inicializa la pantalla llamando a todos los espacios padre existentes
  ngOnInit() {
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });
  }

  // Cada vez que se realiza un cambio se llama el método rrefresh() para volver a realizar las llamadas
  // y actualizar los datos
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

  // Manipula la visualización del modal de espacio padre
  showEspacioPadreModal(): void {
    this.isVisibleEspacioPadreModal = true;
  }
  // Manipula la visualización del modal de espacio 
  showEspacioModal(): void {
    this.isVisibleEspacioModal = true;
  }

  //Manipula la creación de espacios padre, manejo de errores y validacionees
  handleAddEspacioPadre(): void {
    try {
      //Valida que todos los campos esten completos
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

  //Manipula la creación de espacios, manejo de errores y validaciones
  // Asi mismo, se hacen las llamadas a las APIs para crear las relaciones EspacioDeporte y EspacioPuntoImportante
  async handleAddEspacio() {
    try {
      //Valida que todos los campos esten completos
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
      const formValue = this.formEspacio.value;
      this._apiservice.addEspacio(formValue).subscribe( (res) => {
        formValue.deportes_ids.map( (id: number)=>{
          this.addRelDeporte(res.espacio_id, id)
        });
        formValue.puntos_importantes_ids.map( (id: number)=>{
          this.addRelPuntoImportante(res.espacio_id, id)
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

  // Relacion entre espacio y deporte, se manda el espacio id y el deporte id seleccionado
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

   // Relacion entre espacio y punto, se manda el espacio id y el deporte id seleccionado
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

  // Maneja cuando se cierran los modales
  handleCancel(): void {
    this.isVisibleEspacioPadreModal = false;
    this.isVisibleEspacioModal = false;
    this.resetVars();
  }

  //Resetea los valores de los formularios a vacio
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

  //abre el espacio Padre modal
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

  // Función de apoyo para el componente app-file-upload, guarda el archivo subido por el usuario en el formulario de espacio
  addFileEspacio(newItem: string) {
    this.formEspacio.get("imagen")?.setValue(newItem);
  }

  onSelectEspacio(){

  }

  // Agrega los deportes, puntos y espacio padre seleccionados de la lista al formulario de espacio 
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

