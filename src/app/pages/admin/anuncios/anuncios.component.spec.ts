// anuncios.component.spec.ts
// Archivo de pruebas unitarias de la pantalla de anunncios
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnunciosComponent } from './anuncios.component';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

describe('AnunciosComponent', () => {
  let component: AnunciosComponent;
  let fixture: ComponentFixture<AnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, NzModalModule, ],
      declarations: [ AnunciosComponent, CarouselComponent ],
      providers: [NzMessageService, NzModalService, ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all Anuncios screen components', () => {
    expect(component).toBeTruthy();
  });
});
