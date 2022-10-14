import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "../../srvices/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  signUpForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    contact: new FormControl(''),
    gender: new FormControl(''),
    userType: new FormControl('')
  });

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  logIn(): void {
    this.auth.login(this.signInForm.value).subscribe(value => {
      localStorage.setItem("token", value.token);
      localStorage.setItem("name", value.user.name);
      localStorage.setItem("email", value.user.email);
      localStorage.setItem("userType", value.user.userType);
      localStorage.setItem("id", value.user._id);
      console.log('done')
    })
  }

  signUp(): void {
    const {repeatPassword, ...rest} = this.signUpForm.value
    this.auth.signup(rest).subscribe(value => console.log(value))
  }

}
