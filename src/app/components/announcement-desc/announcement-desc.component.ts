import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';
import { Announcement } from 'src/app/Models/Announcement';
import { Post } from 'src/app/Models/Post';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-announcement-desc',
  templateUrl: './announcement-desc.component.html',
  styleUrls: ['./announcement-desc.component.css']
})
export class AnnouncementDescComponent implements OnInit {
  pos1 = new Post();
  enterprise = new User();
  myAnnouncement = new Announcement();//.add("1", "ann1", "desc1", "10-02-2021", this.pos1, this.enterprise);

  constructor(
    private route: Router
  ) { 
    // this.pos1.id = "1";
    // this.enterprise.username = "enterprise A";
  }

  contactUs(idEnterprise: string) {
    console.log("Id enterprise : " + idEnterprise);
    this.route.navigateByUrl("/messages");
  }

  ngOnInit(): void {
    if(history.state['ann'] != null){
      this.myAnnouncement = history.state['ann'];
    }
  }

}
