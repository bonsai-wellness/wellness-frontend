import { NgModule } from '@angular/core';

import { FileUploadComponent } from './file-upload.component';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [ DemoNgZorroAntdModule, FormsModule, CommonModule, ReactiveFormsModule ],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
})
export class FileUploadModule { }
