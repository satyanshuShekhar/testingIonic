import { Component, OnInit } from '@angular/core';
//import router for navigation
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //When we define public router: Router, Angular will create an object for Router class.
  constructor(public router: Router) { }

  ngOnInit() {
  }

  //Login Method for Routing to home from login
  login() {
    this.router.navigate(['/home']);
  }
 //Register Method for Routing to login from register
 register() {
  this.router.navigate(['/register']);
}
//Forgot password Method for Routing to login from forgot password page
 forgot_password() {
  this.router.navigate(['/forgot-password']);
}

}
