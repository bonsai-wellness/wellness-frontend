import { NgModule } from "@angular/core";
import { AppAdminRoutingModule } from "./app-admin-routing.module";
import { AppAdminComponent } from "./app-admin.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule } from "@angular/forms";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    AppAdminRoutingModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    DemoNgZorroAntdModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [AppAdminComponent],
  exports: [AppAdminComponent],
})
export class AppAdminModule {}
