import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-charts',
  templateUrl: './admin-charts.component.html',
  styleUrls: ['./admin-charts.component.css']
})
export class AdminChartsComponent {
  radioValue = 'A';
  public chart: any;
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
          label: 'Entradas esta semana',
          data: [1400, 1200, 1300, 1100, 1000, 900, 800],
          borderColor: '#0a4892',
          backgroundColor: '#0a4892',    
          borderWidth: 1
        }]
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 2000,
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
