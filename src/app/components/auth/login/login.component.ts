import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../srvices/auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  items: MenuItem[] | any;
  activeItem: MenuItem | any;
  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private auth: AuthService) {
}

  ngOnInit(): void {
    this.items = [
      {label: 'Sign In'},
      {label: 'Sign Up'}
    ];

    this.activeItem = this.items[0];
  }

  openLogin(): void {
    this.auth.login(this.signInForm.value).subscribe(value => console.log(value))
  }
}
