import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { EspacioPadre } from "src/app/models/espacioPadre/espacioPadre";
import { ApiserviceService } from "src/app/Service";
import { NzModalService } from "ng-zorro-antd/modal";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-espacio-details",
  templateUrl: "./espacio-details.component.html",
  styleUrls: ["./espacio-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EspacioDetailsComponent implements OnInit {
  espacio: any;
  param_id: any;
  isVisibleEspacioPadreModal = false;
  // isVisibleEspacioModal = false;
  arrEspacioPadre: any;
  formDeporte: FormGroup;
  formPuntoImportante: FormGroup;
  listOfSelectedDeportes = [];
  listOfSelectedPuntos = [];
  openAt = new Date();
  closeAt = new Date();
  espacioOptions = [];
  formEspacio!: FormGroup;
  arrDeportes: any;
  arrPuntosImportantes: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _apiservice: ApiserviceService,
    private modal: NzModalService,
    public formularioEspacio: FormBuilder,
    public formularioDeporte: FormBuilder,
    public formularioPuntoImportante: FormBuilder,
    private message: NzMessageService
  ) {
    let params: any = this.location.getState();
    this.formEspacio = this.formularioEspacio.group({
      name: [params?.name],
      code: [params?.code],
      capacity: [params?.capacity],
      time_max: [params?.time_max],
      details: [params?.details],
      open_at: [params?.open_at],
      close_at: [params?.close_at],
      espacio_padre_id: [params?.espacio_padre_id],
      is_active: [params?.is_active],
      imagen: [params?.imagen],
    });
    this.formDeporte = this.formularioDeporte.group({
      name: [""],
      imagen: [File],
    });
    this.formPuntoImportante = this.formularioPuntoImportante.group({
      name: [""],
    });
  }

  ngOnInit(): void {
    this.param_id = this.route.snapshot.paramMap.get("espacio_id");
    this.espacio = this.location.getState();
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

  showEspacioModal(): void {
    this.isVisibleEspacioPadreModal = true;
  }

  handleEdit(): void {
    this.isVisibleEspacioPadreModal = false;
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
          this.refresh();
        });
      this.formPuntoImportante = this.formularioPuntoImportante.group({
        name: [""],
      });
      this.message.create("success", `Punto importante creado con éxito`);
    } catch (error) {
      this.message.create("error", `No fue posible crear el punto importante`);
    }
  }

  handleCancel(): void {
    this.isVisibleEspacioPadreModal = false;
  }

  onSelectEspacio(val: any) {
    if (val) {
      this.espacioOptions = [];
      this.arrEspacioPadre.map((res: any) => {
        if (res?.name == val) {
          this.espacioOptions = res?.name;
        }
      });
    }
  }

  onSelectDeporte(event: any) {
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
