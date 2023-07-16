import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private UserService: UserService, private router: Router) {}

  login(form: NgForm): void {
    //For now we are not handling the data
    console.log(form.value);
    
    // this.UserService.login();
    // this.router.navigate(['/']);
  }
}
