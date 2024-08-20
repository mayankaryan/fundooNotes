import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  buttonClicked:boolean = false;
  clc_note:boolean = false;
  clc_reminder:boolean = false;
  clc_label:boolean = false;
  clc_edit:boolean = false;
  clc_archive:boolean = false;
  clc_trash:boolean = false;


  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.buttonClick$.subscribe(() => {
      this.buttonClicked = !this.buttonClicked;
      // console.log(this.buttonClicked);
  });
}
appTitle(title:string) {
  // console.log(title);
  this.clc_archive = this.clc_edit = this.clc_label = this.clc_note = this.clc_reminder = this.clc_trash = false;
  if(title == 'Notes') this.clc_note = true;
  else if(title == 'Reminders') this.clc_reminder = true;
  else if(title == 'Label') this.clc_label = true;
  else if(title == 'Edit Label') this.clc_edit = true;
  else if(title == 'Archive') this.clc_archive = true;
  else if(title == 'Trash') this.clc_trash = true;
  this.userService.changeAppTitle(title);
}


}
