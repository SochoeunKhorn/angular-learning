import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationRequest} from "../../models/authentication-request";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../models/authentication-response";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /* inject http-client come from angular/common */
  constructor(
    private http:HttpClient
  ) { }

  /* == post method == */
  authentication(authRequest:AuthenticationRequest):Observable<AuthenticationResponse>{
    return this.http.post<AuthenticationResponse>('https://api.southwest-shv.com/api/auth/login',authRequest);
  }
}
