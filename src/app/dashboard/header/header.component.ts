import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private userService: UserService) {}

  toggle_sidenav() {
    this.userService.sidebarToggle();
  }

}
