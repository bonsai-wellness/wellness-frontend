// shared-components.module.ts
// Declara todos los modulos necesarios para importar de los componentes que son usados en ambos sistemas, alumno y administrador y 
// todos los componentes que se crean dentro de la carpeta se exportan como un modulo compartido
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChartsComponent } from '../admin/admin-charts/admin-charts.component';
import { ApiserviceService } from 'src/app/Service';
import { HttpClientModule } from '@angular/common/http';
import { ModalDeleteComponent } from '../admin/modal-delete/modal-delete.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        NzPopconfirmModule,
    ],

    declarations: [
        AdminChartsComponent,
    ],

    exports: [
        AdminChartsComponent,
    ],
    providers: [
        ApiserviceService,
    ],
})
export class SharedComponentsModule { }
