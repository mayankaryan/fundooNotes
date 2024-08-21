import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private httpClient: HttpClient) { }

  login(user: any): any {
    return this.httpClient.post(
      'https://fundoonotes.incubation.bridgelabz.com/api/user/login',
      {
        "email": user.email,
        "password": user.password
      }
    );
  }

  getAllNotes(): any {
    let access_token = (localStorage.getItem('access_token'));
    console.log(access_token);
    return this.httpClient.get(`https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=${access_token}`)    
  }

}
