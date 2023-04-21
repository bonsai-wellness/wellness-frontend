import { Component, Input, NgIterable } from '@angular/core';
import { ModuleAdmin } from 'src/app/models/admin/moduleAdmin/moduleAdmin';

@Component({
  selector: 'app-cardEspacio',
  templateUrl: './cardEspacio.component.html',
  styleUrls: ['./cardEspacio.component.css']
})
export class CardEspacioComponent  {

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
}