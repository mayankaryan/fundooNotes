import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private toggle_button = new Subject<void>();
  buttonClick$ = this.toggle_button.asObservable();

  sidebarToggle() {
    this.toggle_button.next();
  }
}
