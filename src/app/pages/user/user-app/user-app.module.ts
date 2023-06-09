import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAppRoutingModule } from './user-app-routing.module';
import { UserAppComponent } from './user-app.component';
import { HeaderModule } from 'src/app/components/user/header/header.module';
import { UserComponentsModule } from '../../../components/user/user-components.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ApiserviceService } from 'src/app/Service';



@NgModule({
  declarations: [
    UserAppComponent
  ],
  imports: [
    CommonModule,
    UserAppRoutingModule,
    HeaderModule,
    UserComponentsModule,
    NzLayoutModule,
  ],
  providers: [
    ApiserviceService,
  ],
})
export class UserAppModule { }
