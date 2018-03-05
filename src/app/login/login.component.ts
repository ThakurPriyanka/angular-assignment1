import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;

  ngOnInit() {
    // Create a new user object
    this.user = new User({
      email: '', password: ''
  });
  }
  constructor(private router: Router) { }

  public onFormSubmit({ value, valid}: { value: User, valid: boolean }, route: string) {
    this.user = value;
    if (this.user.email === 'admin@gmail.com' && this.user.password === 'qaz123wsx' && valid)  {
      this.router.navigate([route]);
      console.log( this.user);
      console.log("valid: " + valid + route);
    }

  }
}
