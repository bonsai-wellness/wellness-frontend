import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiserviceService } from "src/app/Service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private _apiService: ApiserviceService
  ) {}

  @ViewChild("footerTemplate") footerTemplate: any;

  visible = false;

  name = "";
  imgUrl = "";

  ngOnInit() {
    // Obtiene  informacion del usuario
    this._apiService.getCurrentUser().subscribe((data: any) => {
      this.name = data.name;
      this.imgUrl = data.profile_picture;
    });
  }

  // Abrir menu
  open(): void {
    this.visible = true;
  }

  // Cerrar menu
  close(): void {
    this.visible = false;
  }
}
