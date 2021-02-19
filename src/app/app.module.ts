import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AnnouncementDescComponent } from './components/announcement-desc/announcement-desc.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddAnnouncementComponent } from './components/add-announcement/add-announcement.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    MessagesComponent,
    AnnouncementsComponent,
    AnnouncementDescComponent,
    UsersComponent,
    PostsComponent,
    EditProfileComponent,
    AddAnnouncementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
