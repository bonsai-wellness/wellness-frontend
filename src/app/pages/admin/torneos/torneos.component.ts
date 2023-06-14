import { Component, OnInit } from "@angular/core";
import { NzMarks } from "ng-zorro-antd/slider";
// import { EspacioPadre } from 'src/app/models/espacioPadre/espacioPadre';
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

  ngOnInit() {
    this._apiservice.getAllActiveTorneos().subscribe((res) => {
      this.arrTorneos = res;
    });
  }

  refresh() {
    this._apiservice.getAllActiveTorneos().subscribe((res) => {
      this.arrTorneos = res;
    });
  }

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
  showModal(): void {
    this.isVisible = true;
  }

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

  handleCancel(): void {
    this.isVisible = false;
  }

  addFileTorneo(newItem: string) {
    this.formTorneo.get("imagen")?.setValue(newItem);
  }

  ranges = {
    Today: [new Date(), new Date()],
    "This Month": [new Date(), endOfMonth(new Date())],
  };

  onChange(result: Date[]): void {
  }

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
