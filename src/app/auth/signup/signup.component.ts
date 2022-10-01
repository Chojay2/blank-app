import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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
