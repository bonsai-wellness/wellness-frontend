import { Component, Input } from "@angular/core";

@Component({
	selector: "app-torneo-card",
	templateUrl: "./torneo-card.component.html",
	styleUrls: ["./torneo-card.component.css"],
})
export class TorneoCardComponent {
  baseURL = "https://josecas.blob.core.windows.net/";
	@Input() torneo: any;  
}
