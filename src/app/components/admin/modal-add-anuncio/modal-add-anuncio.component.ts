import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiserviceService } from 'src/app/Service';
@Component({
  selector: 'app-modal-add-anuncio',
  templateUrl: './modal-add-anuncio.component.html',
  styleUrls: ['./modal-add-anuncio.component.css']
})
export class ModalAddAnuncioComponent implements OnInit {
  isVisible = false;
  formAnuncio: FormGroup;
  arrAnuncios: any;

  constructor(
    private _apiservice: ApiserviceService,
    public formularioAnuncio: FormBuilder,
    private message: NzMessageService
  ) {
    this.formAnuncio = this.formularioAnuncio.group({
      name: [""],
      description: [""],
      url: [""],
      // is_active: ["T"],
    });
  }

  ngOnInit() {

  }

  refresh() {

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

}
