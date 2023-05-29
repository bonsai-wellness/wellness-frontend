import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "src/app/Service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { endOfMonth } from "date-fns";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {
  isVisible = false;
  formAnuncio: FormGroup;
  arrAnuncios: any;
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
    public formularioAnuncio: FormBuilder,
    public formularioDeporte: FormBuilder,
    private message: NzMessageService
  ) {
    this.formAnuncio = this.formularioAnuncio.group({
      name: [""],
      description: [""],
      url: [""],
      // is_active: ["T"],
    });
    this.formDeporte = this.formularioDeporte.group({
      name: [""],
      imagen: [File],
    });
  }

  ngOnInit() {
    this._apiservice.getAllActiveAnuncios().subscribe((res) => {
      this.arrAnuncios = res;
    });
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });

    this._apiservice.getAllDeportes().subscribe((res) => {
      this.arrDeportes = res;
    });
  }

  refresh() {
    this._apiservice.getAllActiveAnuncios().subscribe((res) => {
      this.arrAnuncios = res;
    });
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });

    this._apiservice.getAllDeportes().subscribe((res) => {
      this.arrDeportes = res;
    });
  }

  resetVars() {
    this.formAnuncio = this.formularioAnuncio.group({
      name: [""],
      description: [""],
      url: [""],
      // is_active: ["T"],
    });
    this.formDeporte = this.formularioDeporte.group({
      name: [""],
      imagen: [File],
    });
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleAddAnuncio(): void {
    try {
      if (
        this.formAnuncio.value.name === "" ||
        this.formAnuncio.value.description === "" ||
        this.formAnuncio.value.url === "" ||
        this.formAnuncio.value.imagen === ""
      ) {
        this.message.create("warning", `Todos los campos deben estar llenos`);
        return;
      }
      this.isVisible = false;
      this._apiservice.addAnuncio(this.formAnuncio.value).subscribe((res) => {
        this.refresh();
      });
      this.resetVars();
    } catch (error) {
      this.message.create("error", `No fue posible crear el Anuncio`);
    }
  }

  handleCancel(): void {
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

  espacioOptions = [];

  onSelectEspacio(val: any) {}

  onSelectDeporte(event: any) {

  }

  addFileAnuncio(newItem: string) {
    this.formAnuncio.get("imagen")?.setValue(newItem);
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
  }
}
