import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddAnnouncementComponent } from './components/add-announcement/add-announcement.component';
import { AnnouncementDescComponent } from './components/announcement-desc/announcement-desc.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthGuardService] },
  { path: 'addAnnouncement', component: AddAnnouncementComponent, canActivate: [AuthGuardService] },
  { path: 'announcementDesc', component: AnnouncementDescComponent, canActivate: [AuthGuardService] },
  { path: 'editProfile', component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuardService] },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
