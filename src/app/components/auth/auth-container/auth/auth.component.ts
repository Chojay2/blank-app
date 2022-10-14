import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../srvices/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  cities: any;
  selectedCity1: any;

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });



  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required],
    contact: ['', Validators.required],
    file: ['', Validators.required],
    fileSource: ['', Validators.required],
    location: ['', Validators.required]
  });

  constructor(private auth: AuthService,private fb: FormBuilder) {
  
  }

  ngOnInit(): void {
    this.cities = [
      'Tsirang',
      'Thimphu',
      'Trashigang',
      'Sarpang',
      'Haa',
      'Paro',
      'Chhukha',
      'Samtse'
  ];
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
    const body = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      contact: this.signUpForm.value.contact,
      file: this.signUpForm.value.fileSource,
      location: this.signUpForm.value.location
    }
    this.auth.signup(body,body.file).subscribe(value => console.log(value))
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.signUpForm.patchValue({
        fileSource: file
      });
      console.log('file', file)
    }
  }

}
