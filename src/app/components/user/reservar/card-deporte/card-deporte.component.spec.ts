import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeporteComponent } from './card-deporte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardDeporteComponent', () => {
  let component: CardDeporteComponent;
  let fixture: ComponentFixture<CardDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDeporteComponent ],
      imports:[ BrowserAnimationsModule, HttpClientTestingModule, RouterTestingModule, ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
