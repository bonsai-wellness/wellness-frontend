import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChartsComponent } from '../admin/admin-charts/admin-charts.component';



@NgModule({
    imports: [
        CommonModule,
    ],

    declarations: [
        AdminChartsComponent
    ],

    exports: [
        AdminChartsComponent
    ]
})
export class SharedComponentsModule { }
