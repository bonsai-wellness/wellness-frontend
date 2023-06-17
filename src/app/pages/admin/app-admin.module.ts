// app-admin.module.ts
// Define los modulos y componentes necesarios para importar en la sección de administrador
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppAdminRoutingModule } from "./app-admin-routing.module";
import { ApiserviceService } from "src/app/Service";
import { TorneosComponent } from "./torneos/torneos.component";
import { PanelAdminComponent } from "./panelAdmin/panelAdmin.component";
import { EspaciosComponent } from "./espacios/espacios.component";
import { EspacioDetailsComponent } from "./espacios/espacio-details/espacio-details.component";
import { AnunciosComponent } from "./anuncios/anuncios.component";
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal";
import { AdminComponentsModule } from "src/app/components/admin/admin-components.module";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzFormModule } from "ng-zorro-antd/form";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NzLayoutModule, NzSiderComponent } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { SharedComponentsModule } from "src/app/components/shared/shared-components.module";
import { HeaderModule } from "src/app/components/user/header/header.module";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { NzSliderModule } from "ng-zorro-antd/slider";

@NgModule({
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    NzModalModule,
    AdminComponentsModule,  
    NzSelectModule,  
    NzTabsModule,
    NzFormModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    HeaderModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    // EspaciosModule,
  ],
  declarations: [
    TorneosComponent,
    PanelAdminComponent,
    EspaciosComponent,
    EspacioDetailsComponent,
    AnunciosComponent,
  ],
  providers: [
    ApiserviceService,
    NzModalService,
  ],
  exports:[
    TorneosComponent,
    PanelAdminComponent,
    EspaciosComponent,
    EspacioDetailsComponent,
    AnunciosComponent,
  ],
})
export class AppAdminModule {}
