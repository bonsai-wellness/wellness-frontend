// app.component.spec.ts
// Comprueba que todos los componentes html se esten cargando e importando correctamente
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PanelAdminComponent } from './pages/admin/panelAdmin/panelAdmin.component';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { ApiserviceService } from './Service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent, NzContentComponent
      ],
      providers: [
        ApiserviceService,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render content of App Component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.innerHTML).toContain('div');
    expect(compiled.innerHTML).toContain('router-outlet');
  });
});
