import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { NzMarks } from "ng-zorro-antd/slider";
// import { EspacioPadre } from 'src/app/models/espacioPadre/espacioPadre';
import { ApiserviceService } from "src/app/Service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { finalize, Subscription } from "rxjs";
import { HttpEventType } from "@angular/common/http";
declare var window: any;

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  @Input()
  requiredFileType!: string;

  @Output() newItemEvent = new EventEmitter<string>();

  fileName = "";
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();
  http: any;

  constructor() {}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onFileSelected(event: any) {
    let files = event.target.files as FileList;
    let file: any;
    file = files.item(0);
    this.fileName = file.name;
    this.newItemEvent.emit(file);
    // let img = new Image();
    // img.onload = () => {
    //   // the rest of your code...
    // };
    // console.log(file);
    // img.src = URL.createObjectURL(file);
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
  }
}
