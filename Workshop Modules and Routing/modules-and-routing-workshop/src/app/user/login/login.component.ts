import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private UserService: UserService, private router: Router) {}

  login(email: string, password: string): void {
    //For now we are not handling the data

    this.UserService.login();
    this.router.navigate(['/']);
  }
}
