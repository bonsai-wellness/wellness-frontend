// anuncios.component.ts
// Pantalla de anuncios
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// componente que se crea y se asigna el nombre 'app-anuncios'
// Manipila el modal de crear anuncios y la panyalla donde se despliegan todas las tarjetas app-card-anuncios
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

  // Metodo constructor donnde se declaran todos los formularios a usar en la pantalla,
  // el servico de API, modales y mensajes de validación
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
      imagen: [""],
    });
  }

  // Se inicializa la pantalla llamando a todos los anuncios existentes
  ngOnInit() {
    this._apiservice.getAllActiveAnuncios().subscribe((res) => {
      this.arrAnuncios = res;
    });
  }

  // Cada vez que se realiza un cambio se llama el método refresh() para volver a realizar las llamadas
  // y actualizar los datos
  refresh() {
    this._apiservice.getAllActiveAnuncios().subscribe((res) => {
      this.arrAnuncios = res;
    });
  }

  //Resetea los valores de los formularios a vacio
  resetVars() {
    this.formAnuncio = this.formularioAnuncio.group({
      name: [""],
      description: [""],
      url: [""],
      imagen: [""],
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  //Manipula la creación de anuncios, manejo de errores y validaciones
  // En caso de que exista algun comapo faltante se muestra un mensaje de warning
  handleAddAnuncio(): void {
    try {
      // Se comprueba que todos los campos esten llenos
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
      console.log(error);
      this.message.create("error", `No fue posible crear el Anuncio`);
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  
  // Función de apoyo para el componente app-file-upload, guarda el archivo subido por el usuario en el formulario de espacio
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
