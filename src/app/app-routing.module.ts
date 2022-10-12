import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/auth/auth-container/login/login.component";
import { SignupComponent } from "./components/auth/auth-container/signup/signup.component";
import {AuthContainerComponent} from "./components/auth/auth-container/auth-container.component";
import { PetitionListComponent } from "./components/petition-list/petition-list.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { EndorsementListComponent } from "./components/endorsement-list/endorsement-list.component";
import { BlogPostComponent } from "./screens/blog-post/blog-post.component";
import { PostEndorsementComponent } from "./screens/post-endorsement/post-endorsement.component";
import { UploadPetitionComponent } from "./components/upload-petition/upload-petition.component";
import { BlogCreationComponent } from "./components/blog-creation/blog-creation.component";
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { PetitionComponent } from './components/petition/petition.component';

const routes: Routes = [
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'petition', component: PetitionListComponent},
  {path: 'petition/:id', component: PetitionComponent},
  {path: 'endorsement', component: EndorsementListComponent},
  {path: 'blog', component: BlogPostComponent},
  {path: 'create-endorsement', component: PostEndorsementComponent},
  {path: 'create-petition', component: UploadPetitionComponent},
  {path: 'create-post', component: BlogCreationComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'user/:id', component: PublicProfileComponent},
  {path: '**', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
