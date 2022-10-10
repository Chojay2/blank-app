import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {LoginFormModel} from "../../models/shared.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body:LoginFormModel): Observable<any> {
   return  this.http.post("https://safe-spire-99671.herokuapp.com/auth/login",body)

  }
}
