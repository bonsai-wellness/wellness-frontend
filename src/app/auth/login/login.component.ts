import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from "src/app/Service";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _apiservice: ApiserviceService, private auth: AuthService) {}

  ngOnInit(): void {
    if (this.auth.isAdminAuthenticated()) {
      this.router.navigate(['admin']);
    }
    else if (this.auth.isAuthenticated()) {
      this.router.navigate(['home']);
    }
  }

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
        if (this.auth.isAdminAuthenticated()) {
          this.router.navigate(['admin']);
        }
        else if (this.auth.isAuthenticated()) {
          this.router.navigate(['home']);
        }
      }
    });
  }
}
