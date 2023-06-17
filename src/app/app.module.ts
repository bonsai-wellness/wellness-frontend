// app.module.ts
// Integra todos los modulos y componentes necesarios para la aplicacion 
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
import { NzLayoutModule, } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { DemoNgZorroAntdModule } from "./ng-zorro-antd.module";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "./components/user/header/header.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { AppAdminComponent } from "./pages/admin/app-admin.component";
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { SharedComponentsModule } from "./components/shared/shared-components.module";
import { ApiserviceService } from "./Service";
import { AppAdminModule } from "./pages/admin/app-admin.module";
import { NzSliderModule } from "ng-zorro-antd/slider";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppAdminComponent,
    AppComponent,
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
    SharedComponentsModule,
    NzSliderModule,
    AppAdminModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    ApiserviceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}