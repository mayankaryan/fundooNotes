import { HttpClient, HttpSentEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { error } from 'winston';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes:any[] = [];
  desc:string = "";
  noteList : any;
  inputExpnToggle: boolean = true;
  keyWordNote : string = "";


  constructor(private httpService: HttpService) { }
  
  ngOnInit(): void {
    console.log('note page oninit')

    this.httpService.getAllNotes().subscribe({
      next: (res:any) => {
        console.log('note page : next')
        this.noteList = res.data.data;
        console.log(this.noteList[0]);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }
  
  addNote(content:string) {
    if(content != "") {
      this.notes.push({description: content});
      this.desc = "";
      console.log(this.notes);
    }
  }

  expandInput() {
    this.inputExpnToggle = !this.inputExpnToggle;
    console.log(this.inputExpnToggle);
  }

}
