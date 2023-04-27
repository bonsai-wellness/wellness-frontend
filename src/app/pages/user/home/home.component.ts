import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public title:string = "Bienvenido";

  ngOnInit() {
    document.title = this.title;
    console.log("Home")
  }
}
