// header-espacio.component.ts
// Componente del encabezado de espacio de la pantalla detalles de espacios
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-header-espacio' al componente
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-header-espacio',
  templateUrl: './header-espacio.component.html',
  styleUrls: ['./header-espacio.component.css']
})
export class HeaderEspacioComponent implements OnInit{
  baseURL= AppConstants.baseURL;
  @Input() name = '';
  @Input() code = '';
  @Input() open_at = '';
  @Input() imagen = '';
  @Input() details = '';
  @Input() close_at = '';
  @Input() time_max = '';
  @Input() capacity = '';
  openEditModal = false;

  constructor(private router:Router){
  }

  ngOnInit(): void {
  }

  handleEdit(){
    this.openEditModal=true;
  }

  handleCancel(event:any){
    this.openEditModal=false;
  }
}
