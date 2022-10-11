import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/auth/auth-container/login/login.component";
import { SignupComponent } from "./components/auth/auth-container/signup/signup.component";
import {AuthContainerComponent} from "./components/auth/auth-container/auth-container.component";

const routes: Routes = [
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', redirectTo: 'signin'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
