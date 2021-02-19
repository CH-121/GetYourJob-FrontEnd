import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = new Array<User>();

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  deleteUser(id: string) {
    this.authenticationService.delete(id)
    .subscribe(
      result => {
        this.loadUsers();
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadUsers() {
    this.authenticationService.getAllUsers()
    .subscribe(
      result => {
        for(let user of result) {
          this.users.push(user);
        }
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.loadUsers();
  }

}
