import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  authUrl = 'http://localhost:8000/api/auth/google'; // Replace with the URL of your Express API's Google authentication endpoint

  glogin() {
    const googleWindow = window.open(
      this.authUrl,
      'mywindow',
      'location=1,status=1,scrollbars=1, width=800,height=800'
    );
    let listener = window.addEventListener('message', (message) => {
      //message will contain facebook user and details
      const statusCode = message.data.statusCode;
      googleWindow!.close();
      console.log(message.data.pop)
      if (statusCode === 200) {
        this.router.navigate(['/home']);
      }
    });
  }
}
