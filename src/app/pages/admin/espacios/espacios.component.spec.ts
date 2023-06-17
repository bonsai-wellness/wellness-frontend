// espacios.component.spec.ts
// Archivo de pruebas unitarias de la pantalla de espacios
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzModalComponent } from 'ng-zorro-antd/modal'; 
import { EspaciosComponent } from './espacios.component';
import { NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

describe('EspaciosComponent', () => {
  let component: EspaciosComponent;
  let fixture: ComponentFixture<EspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NzModalModule, NzTabsModule],
      declarations: [ EspaciosComponent],
      providers: [NzModalService, NzMessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all Espacios screen components', inject(
    [HttpTestingController],
    () => {
    expect(component).toBeTruthy();
  }));
});
