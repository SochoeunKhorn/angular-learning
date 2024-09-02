import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../models/authentication-request";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  smgError:string = '';

  /*create object of authentication-request = {object}*/
  authenticationRequest:AuthenticationRequest = {};

  /* == inject service == */
  constructor(private authService:AuthenticationService,private route:Router) {
  }

  /* == handle method login == */
  login() {
    this.smgError = '';
    this.authService.authentication(this.authenticationRequest)
      .subscribe({
        next:(authResponse)=>{
          console.log(authResponse);
          localStorage.setItem('user',JSON.stringify(authResponse));
          this.route.navigate(['customer'])
        },
        error:(err)=>{
          if (err.error.statusCode == 401){
            this.smgError = 'Email or Password incorrect.';
          }
        }
      })
  }
}
