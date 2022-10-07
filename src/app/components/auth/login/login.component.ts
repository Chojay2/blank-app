import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  items: MenuItem[] | any;
  activeItem: MenuItem | any;


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Sign In'},
      {label: 'Sign Up'}
    ];

    this.activeItem = this.items[0];
  }

}
