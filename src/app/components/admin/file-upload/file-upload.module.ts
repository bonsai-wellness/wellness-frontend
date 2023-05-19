import { NgModule } from '@angular/core';

import { FileUploadComponent } from './file-upload.component';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
 
@NgModule({
  imports: [ DemoNgZorroAntdModule, FormsModule, CommonModule, ReactiveFormsModule, NzUploadModule, NzModalModule ],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
})
export class FileUploadModule { }
