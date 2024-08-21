import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  constructor(private httpService:HttpService) {}

  page:string = "account";
  loginObj={"email":"","password":""}; 

  emailFunction() {
    console.log(this.loginObj.email);
    this.page = "password";
  }
  signinFunction() {
    this.httpService.login(this.loginObj).subscribe ({
      next: (res:any) => {
        localStorage.setItem("access_token",res.id);
        this.httpService.getAllNotes();
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }

}
