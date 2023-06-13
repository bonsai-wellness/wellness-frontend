import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { ModuleAdmin } from 'src/app/models/admin/moduleAdmin/moduleAdmin';

@Component({
  selector: 'app-panelAdmin',
  templateUrl: './panelAdmin.component.html',
  styleUrls: ['./panelAdmin.component.css']
})


export class PanelAdminComponent {

  currentName='hola';

  modulesAdmin: ModuleAdmin[] = [
    {
      name: 'Espacios',
      image: "../../../../assets/login-image.png",
      total: 7,
      active: 5,
      inactive: 2,
      lastEdit: '20 de abril',
      path: '../espacios',
    },
    {
      name: 'Torneos y Actividades',
      image: "../../../../assets/login-image.jpeg",
      total: 17,
      active: 15,
      inactive: 2,
      lastEdit: '20 de abril',
      path: '../torneos',
    },
    {
      name: 'Anuncios',
      image: "../../../../assets/login-image.jpeg",
      total: 17,
      active: 15,
      inactive: 2,
      lastEdit: '20 de abril',
      path: '../anuncios',
    },
    {
      name: 'Servicios',
      image: "../../../../assets/login-image.jpeg",
      total: 17,
      active: 15,
      inactive: 2,
      lastEdit: '20 de abril',
      path: '../anuncios',
    }
  ];
}
