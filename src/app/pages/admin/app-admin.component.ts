import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css']
})
export class AppAdminComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isCollapsed = false;
}
