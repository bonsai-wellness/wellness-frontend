// torneos.component.ts
// Define las plantillas de componentes html y estilos css de la pantalla de torneos
// Controla la lógica de todas las variables y funciones de dicha pantalla
import { Component, OnInit } from "@angular/core";
import { NzMarks } from "ng-zorro-antd/slider";
import { ApiserviceService } from "src/app/Service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { endOfMonth } from "date-fns";
import { NzMessageService } from "ng-zorro-antd/message";

declare var window: any;

@Component({
  selector: "app-torneos",
  templateUrl: "./torneos.component.html",
  styleUrls: ["./torneos.component.css"],
})
export class TorneosComponent implements OnInit {
  isVisible = false;
  formTorneo: FormGroup;
  arrTorneos: any;
  arrEspacioPadre: any;
  arrDeportes: any;
  users: any;
  padre: any;
  listOfSelectedDeportes = [];
  openAt = new Date();
  closeAt = new Date();

  //Constructor torneos se declara:
  // El servicio para realizar llamadas HTTP al API
  // Formulario de torneos para crear torneos
  // Servicio Message de la libreria NG ZORRO para mostrar mensajes 
  // de validación (warning, error y exito) al momento de realizar acciones
  constructor(
    private _apiservice: ApiserviceService,
    public formularioTorneo: FormBuilder,
    private message: NzMessageService
  ) {
    this.formTorneo = this.formularioTorneo.group({
      name: [""],
      evento: [""],
      description: [""],
      deporte_id: [0],
      location: [""],
      url: [""],
      imagen: [""],
      dates: [""],
      is_active: ["T"],
    });
  }

  //Inicializador de torneos realiza una llamada GET para traer todos los torneos
  ngOnInit() {
    this._apiservice.getAllActiveTorneos().subscribe((res) => {
      this.arrTorneos = res;
    });
  }

  // Realiza una llamada GET cada vez que se crea un torneo para una actualización automática 
  refresh() {
    this._apiservice.getAllActiveTorneos().subscribe((res) => {
      this.arrTorneos = res;
    });
  }

  // Resetea las variables del formulario al momento de cerrar el modal
  resetVars() {
    this.formTorneo = this.formularioTorneo.group({
      name: [""],
      evento: [""],
      description: [""],
      deporte_id: [0],
      location: [""],
      url: [""],
      imagen: [""],
      dates: [""],
      is_active: ["T"],
    });
  }

  // Manipula el control de la visualización del modal para agregar torneos
  showModal(): void {
    this.isVisible = true;
  }

  // Función que se encarga de la correcta creación de torneos
  handleAddTorneo(): void {
    try {
      if (
        this.formTorneo.value.name === "" ||
        this.formTorneo.value.evento === "" ||
        this.formTorneo.value.description === "" ||
        this.formTorneo.value.deporte_id === 0 ||
        this.formTorneo.value.location === "" ||
        this.formTorneo.value.imagen === "" ||
        this.formTorneo.value.dates === ""
      ) {
        this.message.create("warning", `Todos los campos deben estar llenos`);
        return;
      }

      this._apiservice.addTorneo(this.formTorneo.value).subscribe((res) => {
        this.refresh();
        this.resetVars();
        this.message.create("success", `Torneo creado exitosamente`);
      });
      this.isVisible = false;
      this.resetVars();
    } catch (error) {
      this.message.create("error", `No fue posible crear el torneo`);
    }
  }

  // Manipula el modal aal momento de cancelar la creación de torneos
  handleCancel(): void {
    this.isVisible = false;
  }

  // Función de apoyo para el componente app-file-upload, guarda el archivo subido por el usuario en el formulario de torneos
  addFileTorneo(newItem: string) {
    this.formTorneo.get("imagen")?.setValue(newItem);
  }

  //Rango de fechas de torneo
  ranges = {
    Today: [new Date(), new Date()],
    "This Month": [new Date(), endOfMonth(new Date())],
  };

  //Manipula el cambio en las fechas del formulario de torneos
  onChange(result: Date[]): void {
  }

  // Agrega el deporte y espacio padre seleccionado de la lista al formulario de torneo 
  addList(event:any, type:string){
    if(type=== 'deporte'){
      this.formTorneo.patchValue({
        deporte_id: event, 
      }); 
    }else if(type ==='espacio-padre'){
      this.formTorneo.patchValue({
        location: event.name, 
      }); 
    }
   }
}
