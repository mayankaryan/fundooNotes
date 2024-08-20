import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  login(user: any): any {
   
    console.log(user);
    return this.httpClient.post(
      'https://fundoonotes.incubation.bridgelabz.com/api/user/login',
      {
        "email": "{{user.email}}",
        "password": "{{user.password}}"
      }
    );
  }


  getAllNotes(): any {
    return this.httpClient.get('https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=3VTDDgP7H4LvaC4tTj7BwU2aFDmyAU2y2ekc73ciEjD3fX7DnqM5RIURM8MktCaU');
  }

}
