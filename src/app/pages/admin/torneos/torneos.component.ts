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
  formDeporte: FormGroup;
  listOfSelectedDeportes = [];
  openAt = new Date();
  closeAt = new Date();

  constructor(
    private _apiservice: ApiserviceService,
    public formularioTorneo: FormBuilder,
    public formularioDeporte: FormBuilder,
    private message: NzMessageService
  ) {
    this.formTorneo = this.formularioTorneo.group({
      name: [""],
      evento: [""],
      description: [""],
      deporte_id: [""],
      location: [""],
      url: [""],
      imagen: [""],
      dates: [""],
      is_active: ["T"],
    });
    this.formDeporte = this.formularioDeporte.group({
      name: [""],
      imagen: [File],
    });
  }

  ngOnInit() {
    this._apiservice.getAllActiveTorneos().subscribe((res) => {
      this.arrTorneos = res;
    });
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });

    this._apiservice.getAllDeportes().subscribe((res) => {
      this.arrDeportes = res;
    });
  }

  refresh() {
    this._apiservice.getAllActiveTorneos().subscribe((res) => {
      this.arrTorneos = res;
    });
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });

    this._apiservice.getAllDeportes().subscribe((res) => {
      this.arrDeportes = res;
    });
  }

  resetVars() {
    this.formTorneo = this.formularioTorneo.group({
      name: [""],
      evento: [""],
      description: [""],
      deporte_id: [""],
      location: [""],
      url: [""],
      imagen: [""],
      dates: [""],
      is_active: ["T"],
    });
    this.formDeporte = this.formularioDeporte.group({
      name: [""],
      imagen: [File],
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
        this.formTorneo.value.deporte_id === "" ||
        this.formTorneo.value.location === "" ||
        this.formTorneo.value.imagen === "" ||
        this.formTorneo.value.dates === ""
      ) {
        this.message.create("warning", `Todos los campos deben estar llenos`);
        return;
      }

      this._apiservice.addTorneo(this.formTorneo.value).subscribe((res) => {
        console.log("handleAddTorneo");
        console.log(res);
        this.refresh();
        this.resetVars();
      });
      this.isVisible = false;
      this.resetVars();
    } catch (error) {
      console.log(error);
      this.message.create("error", `No fue posible crear el torneo`);
    }
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisible = false;
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

  espacioOptions = [];

  onSelectEspacio(val: any) {}

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

  addFileTorneo(newItem: string) {
    this.formTorneo.get("imagen")?.setValue(newItem);
  }

  addFileDeporte(event: any) {
    let files = event.target.files as FileList;
    let file: any;
    file = files.item(0);
    this.formDeporte.get("imagen")?.setValue(file);
  }

  ranges = {
    Today: [new Date(), new Date()],
    "This Month": [new Date(), endOfMonth(new Date())],
  };

  onChange(result: Date[]): void {
    console.log("From: ", result[0], ", to: ", result[1]);
  }
}
