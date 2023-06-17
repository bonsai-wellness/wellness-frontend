// modal-add-anuncio.component.ts
// Componente del modal para agregar anuncios
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-modal-add-anuncio' al componente
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-modal-add-anuncio',
  templateUrl: './modal-add-anuncio.component.html',
  styleUrls: ['./modal-add-anuncio.component.css']
})
export class ModalAddAnuncioComponent implements OnInit {
  @Input() isVisible = false;
  @Output() answer = new EventEmitter<string>();

  formAnuncio: FormGroup;
  arrAnuncios: any;

  constructor(
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
