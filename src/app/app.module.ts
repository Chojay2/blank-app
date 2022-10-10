import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { ProgressBarModule } from 'primeng/progressbar';
import { CheckboxModule } from 'primeng/checkbox';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PaginatorModule } from 'primeng/paginator';
import { EndorsementComponent } from './screens/endorsement/endorsement.component';
import { PostEndorsementComponent } from './screens/post-endorsement/post-endorsement.component';
import { BlogPostComponent } from './screens/blog-post/blog-post.component';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TabMenuModule } from "primeng/tabmenu";
import { ButtonModule } from "primeng/button";
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { PetitionComponent } from './components/petition/petition.component';
import { UploadPetitionComponent } from './components/upload-petition/upload-petition.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TabViewModule } from "primeng/tabview";
import { SignupComponent } from "./components/auth/signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import { EventComponent } from './screens/event/event.component';
import {AvatarGroupModule} from "primeng/avatargroup";
import {AvatarModule} from "primeng/avatar";
import { HostEventComponent } from './screens/event/host-event/host-event.component';
import { CalenderComponent } from './screens/calender/calender.component';
import {GMapModule} from "primeng/gmap";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EndorsementComponent,
    PostEndorsementComponent,
    BlogPostComponent,
    MapComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    PublicProfileComponent,
    BlogComponent,
    PetitionComponent,
    UploadPetitionComponent,
    LandingPageComponent,
    SignupComponent,
    EventComponent,
    HostEventComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    InputTextModule,
    ProgressBarModule,
    EditorModule,
    CheckboxModule,
    NgxDropzoneModule,
    PaginatorModule,
    TabMenuModule,
    TabViewModule,
    ButtonModule,
    ReactiveFormsModule,
    AvatarGroupModule,
    AvatarModule,
    HttpClientModule,
    GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
