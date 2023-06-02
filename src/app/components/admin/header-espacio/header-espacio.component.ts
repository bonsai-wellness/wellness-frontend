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
}
