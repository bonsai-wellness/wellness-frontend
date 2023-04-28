import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/user/header/header.module';
import { UserAppRoutingModule } from './pages/user/user-app/user-app-routing.module';

import { PanelAdminRoutingModule } from './pages/admin/panelAdmin/panelAdmin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // HomeUserRoutingModule,
    UserAppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    HeaderModule,
    DemoNgZorroAntdModule,
    PanelAdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
