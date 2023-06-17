// modal-delete.component.ts
// Componente del modal para borrar objetos
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-modal-delete' al componente
import { Component, Input, OnInit } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzModalService } from "ng-zorro-antd/modal";
import { ApiserviceService } from "src/app/Service";

@Component({
  selector: "app-modal-delete",
  templateUrl: "./modal-delete.component.html",
  styleUrls: ["./modal-delete.component.css"],
})
export class ModalDeleteComponent implements OnInit {
  @Input() id_object = 0;
  @Input() size = "";
  @Input() type_object = "";
  @Input() name_object = "";
  mode= 'trash_button';

  constructor(
    private modal: NzModalService,
    private _apiservice: ApiserviceService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    if (this.size === "big") {
      this.handleOpenDelete();
    }
    if(this.type_object==='reservation'){
      this.mode= 'cancel_button';
    }
    if(this.type_object==='espacio'){
      this.mode= 'delete_button';
    }
  }

  confirmDeleteObject() {
    try {
      this._apiservice
        .deleteObject(this.id_object, this.type_object)
        .subscribe((res) => {
          this.message.create("success", `${this.type_object} borrado con éxito`);
        });
    } catch (error) {
      this.message.create("error", `No fue posible borrar el ${this.type_object}`);
    }
  }

  confirmDeleteReservation() {
    try {
      this._apiservice
        .deleteReservacion(this.id_object)
        .subscribe((res) => {
          this.message.create("success", `Reservación cancelada con éxito`);
        });
    } catch (error) {
      this.message.create("error", `No fue posible cancelar la reservación`);
    }
    this.refresh();
  }

  refresh() :void {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  cancelDelete() {}

  handleOpenDelete() {
    this.modal.confirm({
      nzTitle: "Estas seguro que deseas eliminar este torneo?",
      nzContent: '<b style="color: red;">Esta acción no es reversible</b>',
      nzOkText: "Sí",
      nzOkType: "primary",
      nzOkDanger: true,
      nzOnOk: () => console.log("OK"),
      nzCancelText: "No",
      nzOnCancel: () => console.log("Cancel"),
    });
  }
}
