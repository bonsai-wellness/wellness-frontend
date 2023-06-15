import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Service';

@Component({
  selector: 'app-aforo-actual',
  templateUrl: './aforo-actual.component.html',
  styleUrls: ['./aforo-actual.component.css']
})
export class AforoActualComponent {

  constructor(
    private http: HttpClient,
    private _apiService: ApiserviceService
  ) { }

  // Obtiene aforo actual en el intervalo determinado
  ngOnInit(): void {
    this.getGym();
    setInterval(() => {
      this.getGym();
    }, 5000);
  }

  // Funcion que hace get del aforo actual e inicializa la gráfica con el aforo
  getGym(): void {
    this._apiService.getWellnessGym().subscribe((data: any) => {
      const actual = Number(data.aforo_actual);
      const max = Number(data.capacidad_max)
      this.runGraph(Math.round((actual / max) * 100));
    });
  }

  // Funcion que recibe el porcentaje del aforo y ejecuta la gráfica con esos valores
  runGraph(porcentajeNum: number) {
    let porcentajeHTML = document.querySelector('.numb');
    let degrees = 0;
    let leftPercentage = 0;

    let rightPercentage = 0;
    if (porcentajeHTML) {
      porcentajeHTML.textContent = porcentajeNum + '%';
      degrees = (porcentajeNum / 100) * 360;
    }

    if (degrees > 180) {
      leftPercentage = 180
      rightPercentage = degrees - 180;
    } else {
      leftPercentage = degrees;
    }

    let left = document.querySelector<HTMLElement>('.left')!;
    if (left) {
      left.style.setProperty('--leftRotate', leftPercentage + 'deg');
    }

    let right = document.querySelector<HTMLElement>('.right')!;
    if (right) {
      right.style.setProperty('--rightRotate', rightPercentage + 'deg');
    }
  }
}
