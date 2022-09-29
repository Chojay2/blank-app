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
import { EndorsementComponent } from './screens/endorsement/endorsement.component';
import { PostEndorsementComponent } from './screens/post-endorsement/post-endorsement.component';

@NgModule({
  declarations: [
    AppComponent,
    EndorsementComponent,
    PostEndorsementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    InputTextModule,
    ProgressBarModule,
    EditorModule,
    CheckboxModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
