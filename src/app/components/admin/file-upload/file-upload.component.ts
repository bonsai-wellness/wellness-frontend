import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { NzMarks } from "ng-zorro-antd/slider";
// import { EspacioPadre } from 'src/app/models/espacioPadre/espacioPadre';
import { ApiserviceService } from "src/app/Service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { finalize, Subscription } from "rxjs";
import { HttpEventType } from "@angular/common/http";
import { NzUploadFile } from "ng-zorro-antd/upload";

declare var window: any;

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => console.log(error);
  });

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {

  @Input() size = '';

  @Output() newItemEvent = new EventEmitter<string>();

  imageURL: string = '';
  uploadForm: FormGroup;
  constructor(public fb: FormBuilder) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }
  ngOnInit(): void { }

  // Image Preview
  showPreview(event:any) {
    const file = (event.target as any).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar')?.updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file);
    this.newItemEvent.emit(file);
  }
  // Submit Form
  submit() {
  }

}
