// cardEspacio.component.ts
// Componente de la tarjeta  de espacio
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-cardEspacio' al componente
import { Component, Input, NgIterable, OnInit } from '@angular/core';
import { ModuleAdmin } from 'src/app/models/admin/moduleAdmin/moduleAdmin';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app-constants';
@Component({
  selector: 'app-cardEspacio',
  templateUrl: './cardEspacio.component.html',
  styleUrls: ['./cardEspacio.component.css']
})
export class CardEspacioComponent implements OnInit  {
 

  @Input() espacio_id = 0;
  @Input() created_at = '';
  @Input() updated_at = '';
  @Input() name = '';
  @Input() code = '';
  @Input() capacity = 0;
  @Input() time_max = 0;
  @Input() details = '';
  @Input() open_at = '';
  @Input() close_at = '';
  @Input() espacio_padre_id = '';
  @Input() imagen = '';
  @Input() is_active = '';
  baseURL= AppConstants.baseURL;
  
  constructor(private router:Router){

  }

  ngOnInit(): void {
    // this.router.navigateByUrl('./espacios', { state: { id:1 , name:'Angular' } });
  }

}