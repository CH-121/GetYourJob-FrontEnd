import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/Models/Announcement';
import { Post } from 'src/app/Models/Post';
import { User } from 'src/app/Models/User';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {
  public user = new User();
  public posts = new Array<Post>();

  constructor(
    private postService: PostService,
    private announcementService: AnnouncementService,
    private authenticationService: AuthenticationService,
    private route: Router
  ) { 
    this.posts = this.postService.posts;
    this.authenticationService.getUser();
    this.user = this.authenticationService.user;
  }

  addAnnouncement(form: NgForm) {
    console.log("desc when adding:"+form.value.desc);
    let ann = new Announcement();
    ann.title = form.value.title;
    ann.desc = form.value.desc;
    // let ent = new User();
    // ent.id = "602ebaee278e071709279229";
    ann.enterprise = this.user
    let pt = new Post()
    pt.id = form.value.post
    ann.post = pt;
    this.announcementService.addAnnouncement(ann)
    .subscribe(
      result => {
        this.route.navigateByUrl("/announcements");
        console.log("result:"+result);
      },
      error => {
        console.log("error:"+error);
      }
    );
  }
  
  ngOnInit(): void {
  }

}
