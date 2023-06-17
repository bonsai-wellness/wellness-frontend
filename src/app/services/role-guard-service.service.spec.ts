// role-guard-service.service.spec.ts
// Comprueba que todos los componentes html se esten cargando e importando correctamente
import { TestBed } from '@angular/core/testing';
import { RoleGuardService } from './role-guard-service.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

describe('RoleGuardServiceService', () => {
  let service: RoleGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule,],
      declarations: [],
      providers: [
        { provide: NZ_I18N, useValue: en_US },
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService],    
      });
    service = TestBed.inject(RoleGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
