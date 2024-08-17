import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  notes:any[] = [];
  desc:string = "";
  
  addNote(content:string) {
    if(content != "") {
      this.notes.push({description: content});
      this.desc = "";
      console.log(this.notes);
    }
  }


}
