import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { PostComponent } from './post/post.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailsPostsComponent } from './details-posts/details-posts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    PostComponent,
    CreateAdminComponent,
    EditAdminComponent,
    DetailsPostsComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    ErrorHandleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
