import { NgModule } from "@angular/core";

import { AdminRoutingModule } from "./admin-routing.module";
import { DrawerComponent } from "./drawer.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule } from "@angular/forms";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { HeaderModule } from "../../user/header/header.module";
import { HomeUserRoutingModule } from "src/app/pages/user/home-user/home-user-routing.module";
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [
    AdminRoutingModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    HeaderModule,
    HomeUserRoutingModule,
    DemoNgZorroAntdModule,
    CommonModule,
  ],
  declarations: [DrawerComponent],
  exports: [DrawerComponent],
})
export class DrawerModule {}
