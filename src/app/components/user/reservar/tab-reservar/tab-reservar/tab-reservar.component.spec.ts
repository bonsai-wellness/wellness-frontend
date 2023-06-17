import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TabReservarComponent } from "./tab-reservar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SelectEspacioHijoComponent } from "../select-espacio-hijo/select-espacio-hijo.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzCalendarModule } from "ng-zorro-antd/calendar";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N, zh_CN } from "ng-zorro-antd/i18n";

describe("TabReservarComponent", () => {
  let component: TabReservarComponent;
  let fixture: ComponentFixture<TabReservarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TabReservarComponent,
        SelectEspacioHijoComponent,
        CalendarComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        NzSelectModule,
        NzCalendarModule,
        BrowserAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TabReservarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
