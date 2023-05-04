import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-deporte',
  templateUrl: './card-deporte.component.html',
  styleUrls: ['./card-deporte.component.css']
})
export class CardDeporteComponent {
  @Input() deporte_id = '';
  @Input() created_at = '';
  @Input() updated_at = 0;
  @Input() name = '';
  @Input() imagen = '';
}
