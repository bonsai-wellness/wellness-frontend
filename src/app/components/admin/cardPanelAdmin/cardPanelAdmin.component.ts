import { Component, Input, NgIterable } from '@angular/core';
import { ModuleAdmin } from 'src/app/models/admin/moduleAdmin/moduleAdmin';

@Component({
  selector: 'app-cardPanelAdmin',
  templateUrl: './cardPanelAdmin.component.html',
  styleUrls: ['./cardPanelAdmin.component.css']
})
export class CardPanelAdminComponent  {

  @Input() name = '';
  @Input() image = '';
  @Input() total = 0;
  @Input() active = 0;
  @Input() inactive = 0;
  @Input() lastEdit = '';

}
