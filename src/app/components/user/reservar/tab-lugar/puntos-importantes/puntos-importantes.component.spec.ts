import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosImportantesComponent } from './puntos-importantes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

describe('PuntosImportantesComponent', () => {
  let component: PuntosImportantesComponent;
  let fixture: ComponentFixture<PuntosImportantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, RouterTestingModule, NzModalModule],
      declarations: [ PuntosImportantesComponent ],
      providers: [NzModalService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntosImportantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
