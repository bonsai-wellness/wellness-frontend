import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { EspacioPadre } from 'src/app/models/espacioPadre/espacioPadre';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  espaciosPadre: EspacioPadre[] = [];

}
