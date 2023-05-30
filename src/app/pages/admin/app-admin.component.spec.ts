import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminComponent } from './app-admin.component';
import { NzLayoutModule, NzSiderComponent } from 'ng-zorro-antd/layout';
import { RouterTestingModule } from '@angular/router/testing';
import { NzCollapseComponent, NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzMenuModule } from 'ng-zorro-antd/menu';

describe('AppAdminComponent', () => {
  let component: AppAdminComponent;
  let fixture: ComponentFixture<AppAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzLayoutModule, RouterTestingModule, NzMenuModule],
      declarations: [ AppAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all App-admin screen components', () => {
    expect(component).toBeTruthy();
  });

});
