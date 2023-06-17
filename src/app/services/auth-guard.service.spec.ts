// auth-guard.service.spec.ts
// Comprueba que todos los componentes html se esten cargando e importando correctamente
import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: [
        { provide: NZ_I18N, useValue: en_US },
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService],
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
