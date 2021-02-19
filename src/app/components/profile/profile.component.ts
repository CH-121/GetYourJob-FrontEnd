import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new User();

  constructor(
    private route: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.getUser();
    this.user = this.authenticationService.user;
  }

  edit() {
    this.route.navigateByUrl("/editProfile");
  }

  ngOnInit(): void {
  }

}
