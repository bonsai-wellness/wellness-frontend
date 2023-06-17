// admin-charts.component.spec.ts
// Archivo de pruebas unitarias del componente de las graficas del panel de administrador
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminChartsComponent } from './admin-charts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';

describe('AdminChartsComponent', () => {
  let component: AdminChartsComponent;
  let fixture: ComponentFixture<AdminChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, ],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ AdminChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
