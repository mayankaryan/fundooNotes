import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { error } from 'winston';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  constructor(private httpService:HttpService) {}

  page:string = "account";
  loginObj={"email":"","password":""};
  userData: any;

  emailFunction() {
    console.log(this.loginObj.email);
    this.page = "password";
  }
  signinFunction() {
    debugger;
    console.log(this.loginObj);
    
    this.httpService.login(this.loginObj).subscribe ({
      next: (res:any) => {
        this.userData = res;
        console.log(res);
        console.log(this.userData);
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }



}
