import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from "src/app/Service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private router: Router, private _apiservice: ApiserviceService) {}

  authUrl = this. _apiservice.authRoute();

  glogin() {
    const googleWindow = window.open(
      this.authUrl,
      'mywindow',
      'location=1,status=1,scrollbars=1, width=800,height=800'
    );
    let listener = window.addEventListener('message', (message) => {
      //message will contain facebook user and details
      const statusCode = message.data.statusCode;
      localStorage.setItem('token', message.data.jwtToken);
      googleWindow!.close();
      if (statusCode === 200) {
        this.router.navigate(['/home']);
      }
    });
  }
}
