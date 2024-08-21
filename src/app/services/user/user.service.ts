import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  private toggle_button = new Subject<void>();
  buttonClick$ = this.toggle_button.asObservable();

  private app_title = new Subject<string> () ;
  appTitle$ = this.app_title.asObservable();

  private src_qry = new Subject<string> ();
  srcQry$ = this.src_qry.asObservable();

  sidebarToggle() {
    this.toggle_button.next();
  }
  changeAppTitle(title:string) {
    // console.log('at service' + title);
    this.app_title.next(title);
  }

  searchNote(searchQuery: string) {
    // console.log('user service: ' + searchQuery);
    return this.src_qry.next(searchQuery);
  }
  
}
