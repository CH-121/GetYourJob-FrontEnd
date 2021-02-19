import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/Models/Announcement';
import { Post } from 'src/app/Models/Post';
import { User } from 'src/app/Models/User';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  user = new User();
  allAnnouncements = new Array<Announcement>();
  announcement = new Announcement();
  
  constructor(
    private route: Router,
    private announcementService: AnnouncementService,
    public authenticationService: AuthenticationService
  ) {
    this.user.userType = "Enterprise";
   }

  description(ann: Announcement) {
    console.log("ann desc:"+ann.desc);
    this.route.navigateByUrl("/announcementDesc", {state: {ann: ann}})
  }

  loadAnnouncements() {
    this.announcementService.getAnnouncements()
    .subscribe(
      result => {
        for(let i = 0; i < result.length; i++) {
          this.allAnnouncements[i] = new Announcement();
          this.allAnnouncements[i].id = result[i]["id"];
          this.allAnnouncements[i].title = result[i]["title"];
          this.allAnnouncements[i].desc = result[i]["desc"];
          this.allAnnouncements[i].date = result[i]["date"];
          this.allAnnouncements[i].enterprise = result[i]["enterprise"];
          this.allAnnouncements[i].post = result[i]["post"];
        }
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  addAnnouncement() {
    this.route.navigateByUrl("/addAnnouncement");
  }

  ngOnInit(): void {
    this.loadAnnouncements()
    // for(let announcement of this.allAnnouncements) {
    //   announcement = new Announcement();
    // }
    // let pos1 = new Post();
    // pos1.id = "1";
    // pos1.namePost = "Ingénieur";
    // let pos2 = new Post();
    // pos2.id = "2";
    // pos2.namePost = "Médecin";
    // let enterprise = new User();
    // enterprise.username = "enterprise A";
    // this.allAnnouncements.push(new Announcement().add("1", "ann1", "desc1", "10-02-2021", pos1, enterprise));
    // this.allAnnouncements.push(new Announcement().add("2", "ann2", "desc2", "10-03-2021", pos2, enterprise));
    // this.allAnnouncements.push(new Announcement().add("3", "ann3", "desc2", "10-03-2021", pos2, enterprise));
    // this.allAnnouncements.push(new Announcement().add("4", "ann4", "desc2", "10-03-2021", pos2, enterprise));
    // this.allAnnouncements.push(new Announcement().add("5", "ann5", "desc2", "10-03-2021", pos2, enterprise));
    // this.allAnnouncements.push(new Announcement().add("6", "ann6", "desc2", "10-03-2021", pos2, enterprise));
    // this.allAnnouncements.push(new Announcement().add("7", "ann7", "desc2", "10-03-2021", pos2, enterprise));
  }

}
