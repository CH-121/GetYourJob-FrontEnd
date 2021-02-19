import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  public user = new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  onLogin(data){
    this.authenticationService.login(data).subscribe(response=>{
      this.user.id = response['id'];
      this.user.username = response['username'];
      this.user.email = response['email'];
      this.user.adress = response['adress'];
      this.user.password = response['password'];
      console.log(this.user);

      let jwt = response.headers.get('Authorization')
      this.authenticationService.saveToken(jwt)
      this.router.navigateByUrl("/announcements")
      this.authenticationService.isLoggedIn = true;
    }), err=>{
      console.log(err)
    }
  }

  // login() {
  //   let url = 'http://localhost:8080/login';
  //   let result = this.http.post<Observable<boolean>>(url, {
  //     userName: this.model.username,
  //     password: this.model.password
  //   }).subscribe(isValid => {
  //       if (isValid) {
  //           sessionStorage.setItem(
  //             'token', 
  //             btoa(this.model.username + ':' + this.model.password)
  //           );
  //     this.router.navigate(['']);
  //       } else {
  //           alert("Authentication failed.")
  //       }
  //   });
  // }

}
