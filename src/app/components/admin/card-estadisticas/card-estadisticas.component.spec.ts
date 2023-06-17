// card-estadisticas.component.spec.ts
// Archivo de pruebas unitarias del componente de la tarjeta de estadisticas
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardEstadisticasComponent } from './card-estadisticas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';

describe('CardEstadisticasComponent', () => {
  let component: CardEstadisticasComponent;
  let fixture: ComponentFixture<CardEstadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, ],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ CardEstadisticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



