import { Component, OnInit } from "@angular/core";
import { NzMarks } from "ng-zorro-antd/slider";
// import { EspacioPadre } from 'src/app/models/espacioPadre/espacioPadre';
import { ApiserviceService } from "src/app/Service";
import { FormBuilder, FormGroup } from "@angular/forms";
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

  constructor(
    private _apiservice: ApiserviceService,
    public formularioTorneo: FormBuilder,
    public formularioDeporte: FormBuilder
  ) {
    this.formTorneo = this.formularioTorneo.group({
      name: [""],
      code: [""],
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
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log("Button ok clicked!");
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisible = false;
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
}
