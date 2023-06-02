import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-lugar',
  templateUrl: './tab-lugar.component.html',
  styleUrls: ['./tab-lugar.component.css']
})
export class TabLugarComponent{
  @Input() espaciosPadre: any;
  @Input() espaciosHijo: any;
}
