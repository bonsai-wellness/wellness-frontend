import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeZH from '@angular/common/locales/zh';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(localeZH);

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent ],
      imports:[ HttpClientTestingModule, RouterTestingModule, NzCalendarModule, BrowserAnimationsModule ],
      providers: [
        { provide: LOCALE_ID, useValue: 'zh-cn'},
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
