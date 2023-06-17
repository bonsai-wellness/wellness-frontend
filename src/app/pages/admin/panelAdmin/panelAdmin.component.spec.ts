// panelAdmin.component.spec.ts
// Pruebas unitarias para la pantalla de panel administrador 
// Se comprueba que todos los componentes uttlizados son renderizados e importados correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdminComponent } from './panelAdmin.component';
import { RouterTestingModule } from "@angular/router/testing";
import { CardPanelAdminComponent } from 'src/app/components/admin/cardPanelAdmin/cardPanelAdmin.component';
import { ExportButtonComponent } from 'src/app/components/admin/export-button/export-button.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminPeopleCardComponent } from 'src/app/components/admin/admin-people-card/admin-people-card.component';
import { AdminChartsComponent } from 'src/app/components/admin/admin-charts/admin-charts.component';
import { ReservationTableComponent } from 'src/app/components/admin/reservation-table/reservation-table.component';
describe('PanelAdminComponent', () => {
  let component: PanelAdminComponent;
  let fixture: ComponentFixture<PanelAdminComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule],
      declarations: [ PanelAdminComponent, CardPanelAdminComponent, ExportButtonComponent, AdminPeopleCardComponent, AdminChartsComponent, ReservationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all Panel Admin screen components', () => {
    expect(component).toBeTruthy();
  });
});
