import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-select-espacio-hijo",
	templateUrl: "./select-espacio-hijo.component.html",
	styleUrls: ["./select-espacio-hijo.component.css"],
})
export class SelectEspacioHijoComponent {	  
  selectedValue = null;
	@Input() data: any = [];
	@Output() updateState = new EventEmitter();
  

	updateParentState(newValue: any) {
		const updatedState = newValue;    
		this.updateState.emit(updatedState);
	}
}
