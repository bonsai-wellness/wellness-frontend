import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionComponent } from './ubicacion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzListComponent, NzListItemComponent, NzListModule } from 'ng-zorro-antd/list';
import { EspaciosPadreComponent } from '../espacios-padre/espacios-padre.component';
import { UserComponentsModule } from '../../../user-components.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UbicacionComponent', () => {
  let component: UbicacionComponent;
  let fixture: ComponentFixture<UbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule ],
      declarations: [ UbicacionComponent, EspaciosPadreComponent,],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
