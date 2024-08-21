import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
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
  userId : any;          // without ! code throwing unauthorised error while execution

  emailFunction() {
    console.log(this.loginObj.email);
    this.page = "password";
  }
  signinFunction() {
    console.log(this.loginObj);
    
    this.httpService.login(this.loginObj).subscribe ({
      next: (res:any) => {
        this.userId = res.id;
        this.sendToken();
        this.httpService.getAllNotes();
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }
  sendToken() {
    this.httpService.getToken(this.userId);
  }



}
