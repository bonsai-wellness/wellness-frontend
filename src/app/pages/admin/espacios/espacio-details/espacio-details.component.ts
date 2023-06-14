import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ApiserviceService } from "src/app/Service";

@Component({
  selector: "app-espacio-details",
  templateUrl: "./espacio-details.component.html",
  styleUrls: ["./espacio-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EspacioDetailsComponent implements OnInit {
  espacio: any;
  param_id: any;
  todayReservations: any;
  pastReservations: any;
  nextReservations: any;

  constructor(private route: ActivatedRoute, private location: Location, private _apiservice: ApiserviceService) {
    let params: any = this.location.getState();
  }

  ngOnInit(): void {
    this.param_id = this.route.snapshot.paramMap.get("espacio_id");
    this.espacio = this.location.getState();
    this._apiservice.getTodayReservations(this.param_id).subscribe(res => { 
      this.todayReservations = res; 
    });
    this._apiservice.getPastReservations(this.param_id).subscribe(res => { 
      this.pastReservations = res; 
    });
    this._apiservice.getNextReservations(this.param_id).subscribe(res => { 
      this.nextReservations = res; 
    });
  }
}
