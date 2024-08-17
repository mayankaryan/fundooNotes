import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  page:string = "password";
  loginObj={"email":"","password":""};

  emailFunction() {
    console.log(this.loginObj.email);
    this.page = "password";
  }
  signinFunction() {
    console.log("succesfull");
  }

}
