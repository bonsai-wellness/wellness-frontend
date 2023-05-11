import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppComponent } from './user-app.component';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { HeaderModule } from 'src/app/components/user/header/header.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzHeaderComponent } from 'ng-zorro-antd/layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('UserAppComponent', () => {
  let component: UserAppComponent;
  let fixture: ComponentFixture<UserAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ UserAppComponent, NzContentComponent, NzHeaderComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all App User screen components', () => {
    expect(component).toBeTruthy();
  });
});
