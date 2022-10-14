import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {LoginFormModel, SignUpFormModal} from "../../models/shared.models";
import {Observable} from "rxjs";
import {SignUpFromModal} from "../../../models/shared.models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body:LoginFormModel): Observable<any> {
   return  this.http.post("http://localhost:8080/auth/login",body)
  }

  signup(body:SignUpFromModal): Observable<any> {
    return this.http.post("http://localhost:8080/auth/register",body)
  }
}
