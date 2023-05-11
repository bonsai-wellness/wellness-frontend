import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdminComponent } from './panelAdmin.component';
import { RouterTestingModule } from "@angular/router/testing";
import { CardPanelAdminModule } from 'src/app/components/admin/cardPanelAdmin/cardPanelAdmin.module';
describe('PanelAdminComponent', () => {
  let component: PanelAdminComponent;
  let fixture: ComponentFixture<PanelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPanelAdminModule, RouterTestingModule],
      declarations: [ PanelAdminComponent ]
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
