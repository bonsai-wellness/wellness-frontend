import { Component } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {
  public title:string = "Reserva";

  ngOnInit() {
    document.title = this.title;
    console.log("Reserva")
  }
}
