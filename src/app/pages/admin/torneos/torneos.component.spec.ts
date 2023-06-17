// torneos.component.spec.ts
// Archivo de pruebas unitarias para la pagina de torneos
// Comprueba que todos los componentes html se esten cargando e importando correctamente
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TorneosComponent } from './torneos.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

describe('TorneosComponent', () => {
  let component: TorneosComponent;
  let fixture: ComponentFixture<TorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NzModalModule],
      declarations: [ TorneosComponent ],
      providers: [NzModalService, NzMessageService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all Torneos screen components', inject(
    [HttpTestingController],
    () => {
    expect(component).toBeTruthy();
  }));
});
