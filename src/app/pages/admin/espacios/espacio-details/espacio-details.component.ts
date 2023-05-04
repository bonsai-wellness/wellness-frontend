import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { EspacioPadre } from "src/app/models/espacioPadre/espacioPadre";
import { ApiserviceService } from "src/app/Service";
import { NzModalService } from "ng-zorro-antd/modal";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: "app-espacio-details",
  templateUrl: "./espacio-details.component.html",
  styleUrls: ["./espacio-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EspacioDetailsComponent implements OnInit {

  espacio: any;
  param_id:any;
  isVisibleEspacioPadreModal = false;
  // isVisibleEspacioModal = false;
  arrEspacioPadre: any;
  // espaciosPadre: EspacioPadre[] = [];
  // users: any;
  // padre: any;
  espacioOptions = [];
  formEspacio!: FormGroup;

  constructor(private route: ActivatedRoute, private location:Location,private _apiservice: ApiserviceService,
    private modal: NzModalService,
    public formularioEspacio: FormBuilder,){
        let params:any = this.location.getState();
  console.log(params);
        this.formEspacio = this.formularioEspacio.group({
          name: [params.name],
          code: [params.code],
          capacity: [params.capacity],
          time_max: [params.time_max],
          details:[params.details],
          open_at: [params.open_at],
          close_at:[params.close_at],
          espacio_padre_id: [params.espacio_padre_id],
          is_active: [params.is_active],
          imagen: [params.imagen],
        });
      
  }

  ngOnInit(): void {
    this.param_id = this.route.snapshot.paramMap.get('espacio_id');
    this.espacio = this.location.getState()
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });
  }

  showEspacioModal(): void {
    console.log('click');
    this.isVisibleEspacioPadreModal = true;
  }

  handleEdit(): void {
    console.log("Button ok clicked!");
    console.log(this.formEspacio.value);
    // this._apiservice
    //   .addEspacioPadre(this.formEspacio.value)
    //   .subscribe((respuesta) => {
    //     console.log("Post espacio padre");
    //   });
    this.isVisibleEspacioPadreModal = false;
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisibleEspacioPadreModal = false;
  }



  onSelectEspacio(val: any) {
    if (val) {
      this.espacioOptions = [];
      this.arrEspacioPadre.map((res:any) => {
        if(res.name == val){
          this.espacioOptions = res.name;
        }
      });
    }
  }

}
