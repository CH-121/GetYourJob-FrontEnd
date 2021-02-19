import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public user = new User();
  public isCorrectPassword = true;
  public errorPassword = "";

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.getUser();
    this.user = this.authenticationService.user;
  }

  verifyPassword(password: string) {
    if(this.user.password == password) {
      this.isCorrectPassword = true;
    }
    else {
      this.isCorrectPassword = false;
      this.errorPassword = "Password not correct, try again !";
    }
  }

  editProfile(form: NgForm) {

  }

  ngOnInit(): void {
  }

}
