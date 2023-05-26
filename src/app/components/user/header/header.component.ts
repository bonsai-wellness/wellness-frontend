import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) {}

  @ViewChild('footerTemplate') footerTemplate: any;
  
  visible = false;

  name = "";
  imgUrl = "";

  ngOnInit() {
    console.log("HOLA")
    this.http
      .get<any>('http://localhost:8000/api/auth/user', {
        withCredentials: true,
      })
      .subscribe((data) => {
        console.log(data);
        this.name = data.name;
        this.imgUrl = data.profile_picture;
      });
  }


  open(): void {
    this.visible = true;
    console.log("open");
    console.log(this.name)
    console.log(this.imgUrl)
  }

  close(): void {
    this.visible = false;
    console.log("close")
  }
}
