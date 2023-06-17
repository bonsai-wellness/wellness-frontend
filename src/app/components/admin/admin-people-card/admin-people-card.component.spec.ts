// admin-people-card.component.spec.ts
// Archivo de pruebas unitarias del componente de la tarjeta de persona del panel de administrador
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPeopleCardComponent } from './admin-people-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';

describe('AdminPeopleCardComponent', () => {
  let component: AdminPeopleCardComponent;
  let fixture: ComponentFixture<AdminPeopleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, ],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ AdminPeopleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPeopleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
