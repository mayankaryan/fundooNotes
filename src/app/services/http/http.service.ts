import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token : string = "";
  constructor(private httpClient: HttpClient) { }
  url: any = 'https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=';

  login(user: any): any {
    return this.httpClient.post(
      'https://fundoonotes.incubation.bridgelabz.com/api/user/login',
      {
        "email": user.email,
        "password": user.password
      }
    );
  }

  getToken(token: string){
    this.token = token;
    this.url = this.url + token;
    console.log('http gettoken: ' + this.token);
  }
  getAllNotes(): any {
    console.log(this.url);
    return this.httpClient.get(this.url);
  }

}
