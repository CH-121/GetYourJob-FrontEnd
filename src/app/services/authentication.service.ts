import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public user = new User();
  public isLoggedIn = false;
  public isAd = false;
  private url = "http://localhost:8080/user";

  public host1: string = "http://localhost:8081";
  jwt : string;
  username: string;
  roles: Array<string>;
  
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  login(data){
    return this.http.post(this.host1 + "/login", data, {observe : 'response'});
  }

  signup(data){
    return this.http.post(this.host1 + "/register", data, {observe : 'response'});
  }

  //--------  Save the token ------------
  saveToken(jwt: string){
    //------- save in localStorage -------
    localStorage.setItem('token', jwt)
    this.jwt = jwt;
    this.parseJWT();
  }

  //---- get username and roles from jwt ---------
  parseJWT(){
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    if(objJWT != null){
      this.username = objJWT.obj;
      this.roles = objJWT.roles;
    }

  }

  isAuthenticated(){
    return this.roles != undefined && (this.isAdmin() || this.isUser())
  }

  isAdmin(){
    this.isAd = true
    return this.roles.indexOf('ADMIN') >= 0;
  }

  isUser(){
    return this.roles.indexOf('USER') >= 0;
  }

  //------- get token ----------
  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }

  logout(){
    //--- delete token from localStorage -----------
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.initParams
    this.route.navigateByUrl("/login");
  }

  initParams(){
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

  // ---------------------------------------------
  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  getUser() {
    let id = "602eecc7686e2879e56a5aeb";
    this.http.get(`${this.url}`+`/getUser/${id}`)
    .subscribe(
      result => {
        this.user.id = result['id'];
        this.user.username = result['username'];
        this.user.email = result['email'];
        this.user.adress = result['adress'];
        this.user.password = result['password'];
        // this.user.id = result['userType'];
        console.log("authentication service:"+result);
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.url}`+`/allUsers`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}`+`/delete/${id}`, { responseType: 'text' });
  }

}
