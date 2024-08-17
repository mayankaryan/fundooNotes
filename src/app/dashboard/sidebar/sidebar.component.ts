import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  buttonClicked:boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.buttonClick$.subscribe(() => {
      this.buttonClicked = !this.buttonClicked;
      // console.log(this.buttonClicked);
  });
  }
}
