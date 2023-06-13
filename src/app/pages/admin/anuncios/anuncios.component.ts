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
    });
  }

  ngOnInit() {
    this._apiservice.getAllActiveAnuncios().subscribe((res) => {
      this.arrAnuncios = res;
    });
  }

  refresh() {
    this._apiservice.getAllActiveAnuncios().subscribe((res) => {
      this.arrAnuncios = res;
    });
  }

  resetVars() {
    this.formAnuncio = this.formularioAnuncio.group({
      name: [""],
      description: [""],
      url: [""],
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

  addFileAnuncio(newItem: string) {
    this.formAnuncio.get("imagen")?.setValue(newItem);
  }

  ranges = {
    Today: [new Date(), new Date()],
    "This Month": [new Date(), endOfMonth(new Date())],
  };

  onChange(result: Date[]): void {
  }
}
