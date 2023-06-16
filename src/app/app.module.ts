import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { IconsProviderModule } from "./icons-provider.module";
import { NzLayoutComponent, NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { DemoNgZorroAntdModule } from "./ng-zorro-antd.module";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "./components/user/header/header.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NzOptionComponent, NzSelectModule } from "ng-zorro-antd/select";
import { NzSelectComponent } from "ng-zorro-antd/select";
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { ModalAddAnuncioComponent } from "./components/admin/modal-add-anuncio/modal-add-anuncio.component";
import { AnunciosComponent } from "./pages/admin/anuncios/anuncios.component";
import { CardAnuncioComponent } from "./components/admin/card-anuncio/card-anuncio.component";
import { FileUploadComponent } from "./components/admin/file-upload/file-upload.component";
import { TorneosComponent } from "./pages/admin/torneos/torneos.component";
import { PanelAdminComponent } from "./pages/admin/panelAdmin/panelAdmin.component";
import { EspaciosComponent } from "./pages/admin/espacios/espacios.component";
import { TabEspaciosComponent } from "./components/admin/tabEspacios/tabEspacios.component";
import { SelectDeporteComponent } from "./components/admin/select-deporte/select-deporte.component";
import { SelectPuntoImportanteComponent } from "./components/admin/select-punto-importante/select-punto-importante.component";
import { SelectEspacioPadreComponent } from "./components/admin/select-espacio-padre/select-espacio-padre.component";
import { DrawerComponent } from "./components/admin/drawer/drawer.component";
import { CardTorneoComponent } from "./components/admin/cardTorneo/cardTorneo.component";
import { CardPanelAdminComponent } from "./components/admin/cardPanelAdmin/cardPanelAdmin.component";
import { CardEspacioComponent } from "./components/admin/cardEspacio/cardEspacio.component";
import { CardReservacionComponent } from "./components/admin/card-reservacion/card-reservacion.component";
import { CardEstadisticasComponent } from "./components/admin/card-estadisticas/card-estadisticas.component";
import { EspacioDetailsComponent } from "./pages/admin/espacios/espacio-details/espacio-details.component";
import { AppAdminComponent } from "./pages/admin/app-admin.component";
import { HeaderEspacioComponent } from "./components/admin/header-espacio/header-espacio.component";
import { ModalEditEspacioComponent } from "./components/admin/modal-edit-espacio/modal-edit-espacio.component";
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { SharedComponentsModule } from "./components/shared/shared-components.module";

import { ModalDeleteComponent } from './components/admin/modal-delete/modal-delete.component'
import { AdminPeopleCardComponent } from "./components/admin/admin-people-card/admin-people-card.component";
import { ExportButtonComponent } from "./components/admin/export-button/export-button.component"; 
import { ReservationTableComponent } from "./components/admin/reservation-table/reservation-table.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ModalAddAnuncioComponent,
    AnunciosComponent,
    CardAnuncioComponent,
    FileUploadComponent,
    TorneosComponent,
    PanelAdminComponent,
    EspaciosComponent,
    TabEspaciosComponent,
    SelectPuntoImportanteComponent,
    SelectEspacioPadreComponent,
    SelectDeporteComponent,
    DrawerComponent,
    CardTorneoComponent,
    CardPanelAdminComponent,
    CardEspacioComponent,
    CardReservacionComponent,
    CardEstadisticasComponent,
    EspacioDetailsComponent,
    AppAdminComponent,
    HeaderEspacioComponent,
    ModalEditEspacioComponent,
    ModalDeleteComponent,
    AdminPeopleCardComponent,
    ExportButtonComponent,
    ReservationTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    HeaderModule,
    DemoNgZorroAntdModule,
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzModalModule,
    NzFormModule,
    SharedComponentsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}