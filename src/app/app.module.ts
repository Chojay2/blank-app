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
import { ProgressComponent } from './components/progress/progress.component';
import { LoginComponent } from './auth/login/login.component';
import {TabMenuModule} from "primeng/tabmenu";
import {ButtonModule} from "primeng/button";
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    EndorsementComponent,
    PostEndorsementComponent,
    BlogPostComponent,
    MapComponent,
    ProgressComponent
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
    PaginatorModule
    LoginComponent,
    SignupComponent
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
        ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
