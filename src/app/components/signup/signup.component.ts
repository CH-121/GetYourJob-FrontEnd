import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public error = "";
  constructor(
    private authenticationService: AuthenticationService, private router: Router
  ) { }

  verifyPassword(password: string, passwordConfirmation: string) {
    if(password == passwordConfirmation){
      return true;
    }
    else{
      return false;
    }
  }

  onSignUp(data){
    this.authenticationService.signup(data).subscribe(result=>{
      this.router.navigateByUrl("/login")
    }), err=>{
      console.log(err)
    }
  }

  // editProfile(form: NgForm) {
  //   if(this.verifyPassword(form.value.password, form.value.passwordConfirmation)) {
  //     this.error = "";
  //   }
  //   else {
  //     this.error = "Password and password confirmation are not the same !";
  //   }
  // }

  ngOnInit(): void {
  }

}
