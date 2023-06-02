import Chart from 'chart.js/auto';
import { Component } from '@angular/core';
import { min } from 'cypress/types/lodash';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';


// @Component({
//   selector: 'app-card-estadisticas',
//   templateUrl: './card-estadisticas.component.html',
//   styleUrls: ['./card-estadisticas.component.css']
// })

// export class CardEstadisticasComponent {
//   radioValue = 'A';
//   public chart: any;
//   createChart(){
  
//     this.chart = new Chart("MyChart", {
//       type: 'bar',
//       data: {
//         labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
//         datasets: [{
//           label: 'Entradas esta semana',
//           data: [1400, 1200, 1300, 1100, 1000, 900, 800],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         animations: {
//           tension: {
//             duration: 1000,
//             easing: 'linear',
//             from: 1,
//             to: 0,
//             loop: true
//           }
//         },
//         scales: {
//           y: {
//             beginAtZero: true,
//             max: 2000,
//           }
//         },
//         plugins: {
//           legend: {
//             display: false
//           }
//         }
//       }
//     });
//   }
//   ngOnInit(): void {
//     this.createChart();
//   }
// }


// @Component({
//   selector: 'nz-demo-menu-horizontal',
//   template: `
//     <ul nz-menu nzMode="horizontal">
//       <li nz-menu-item nzSelected>
//         <i nz-icon nzType="mail"></i>
//         Navigation One
//       </li>
//       <li nz-menu-item nzDisabled>
//         <i nz-icon nzType="appstore"></i>
//         Navigation Two
//       </li>
//       <li nz-submenu nzTitle="Navigation Three - Submenu" nzIcon="setting">
//         <ul>
//           <li nz-menu-group nzTitle="Item 1">
//             <ul>
//               <li nz-menu-item>Option 1</li>
//               <li nz-menu-item>Option 2</li>
//             </ul>
//           </li>
//           <li nz-menu-group nzTitle="Item 2">
//             <ul>
//               <li nz-menu-item>Option 3</li>
//               <li nz-menu-item>Option 4</li>
//               <li nz-submenu nzTitle="Sub Menu">
//                 <ul>
//                   <li nz-menu-item nzDisabled>Option 5</li>
//                   <li nz-menu-item>Option 6</li>
//                 </ul>
//               </li>
//               <li nz-submenu nzDisabled nzTitle="Disabled Sub Menu">
//                 <ul>
//                   <li nz-menu-item>Option 5</li>
//                   <li nz-menu-item>Option 6</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </li>
//       <li nz-menu-item>
//         <a href="https://ng.ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
//       </li>
//     </ul>
//   `
// })
// export class NzDemoMenuHorizontalComponent {}


@Component({
  selector: 'app-card-estadisticas',
  template: `
    <h2>Componente 1</h2>
    <p>Contenido del componente 1</p>
    <h2>Componente 2</h2>
    <p>Contenido del componente 2</p>
  `
})
export class CardEstadisticasComponent { }

@Component({
  selector: 'app-card-estadisticas3',
  template: `
    <h2>Componente 3</h2>
    <p>Contenido del componente 3</p>
    <h2>Componente 4</h2>
    <p>Contenido del componente 4</p>
  `
})
export class Componente2Component { }