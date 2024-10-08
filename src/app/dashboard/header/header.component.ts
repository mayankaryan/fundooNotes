import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "Fundoo";
  searchQuery : string = "";
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.appTitle$.subscribe({
      next: (res) => {
        this.title = res;
      }
    })
  }
  toggle_sidenav() {
    this.userService.sidebarToggle();
  }

  searchNote(){
    // console.log(this.searchQuery);
    this.userService.searchNote(this.searchQuery);
  }



}
