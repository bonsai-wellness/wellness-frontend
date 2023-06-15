import { Component } from '@angular/core';
import { Deporte } from 'src/app/models/deporte/deporte';
import { ApiserviceService } from 'src/app/Service';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar-menu.component.html',
  styleUrls: ['./reservar-menu.component.css']
})
export class ReservarMenuComponent {

  public title: string = "Reserva";
  deportes: any;
  filteredDeportes: any;
  baseURL = AppConstants.baseURL;
  searchText: any;

  constructor(private _apiservice: ApiserviceService) { }


  ngOnInit() {
    // Define título de la página
    document.title = this.title;

    // Obtiene lista de deportes
    this._apiservice.getAllDeportes().subscribe(res => {
      this.deportes = res;
      this.filteredDeportes = this.deportes;
    })

  }

  // Filtra los deportes por búsqueda
  Filtrar(search: string): void {
    this.filteredDeportes = this.deportes.filter((deporte: any) => {
      return deporte.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
